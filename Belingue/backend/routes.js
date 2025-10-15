import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { openDb } from "./db.js";

const router = express.Router();
const SECRET = "LSC_SECRET_KEY";

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const db = await openDb();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
    res.json({ message: "Usuario registrado correctamente" });
  } catch (err) {
    res.status(400).json({ error: "El usuario ya existe o error en registro" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const db = await openDb();

  const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Contraseña incorrecta" });

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "2h" });
  res.json({ message: "Inicio de sesión exitoso", token });
});

export default router;
