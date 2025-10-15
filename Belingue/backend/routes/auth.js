import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

const router = express.Router();
const SECRET = "supersecreto123"; // cámbialo por un valor seguro

// Registro
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashed]);
    res.json({ message: "Usuario registrado correctamente" });
  } catch (err) {
    res.status(400).json({ error: "El correo ya está registrado" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
  if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: "Contraseña incorrecta" });

  const token = jwt.sign({ id: user.id, name: user.name }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

export default router;
