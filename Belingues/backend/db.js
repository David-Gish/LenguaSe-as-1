const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la BD
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "prueba"
});

// Registro
app.post("/register", async (req, res) => {
  const { user, pass } = req.body;
  try {
    await db.query("INSERT INTO usuarios (usuario, clave) VALUES (?, ?)", [user, pass]);
    res.json({ success: true, message: "✅ Usuario registrado correctamente" });
  } catch (err) {
    res.json({ success: false, message: "❌ Error al registrar: " + err.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { user, pass } = req.body;
  const [rows] = await db.query("SELECT * FROM usuarios WHERE usuario = ? AND clave = ?", [user, pass]);
  
  if (rows.length > 0) {
    res.json({ success: true, message: " Bienvenido" });
  } else {
    res.json({ success: false, message: "Usuario o clave incorrectos" });
  }
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
