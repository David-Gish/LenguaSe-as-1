// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let usuarios = []; // temporal (en memoria)

// 📌 Ruta de registro
app.post("/register", (req, res) => {
  const { user, pass } = req.body;
  const existe = usuarios.find(u => u.user === user);

  if (existe) {
    return res.json({ success: false, message: "⚠️ Usuario ya existe" });
  }

  usuarios.push({ user, pass });
  res.json({ success: true, message: "✅ Usuario registrado con éxito" });
});

// 📌 Ruta de login
app.post("/login", (req, res) => {
  const { user, pass } = req.body;
  const encontrado = usuarios.find(u => u.user === user && u.pass === pass);

  if (encontrado) {
    res.json({ success: true, message: "🔓 Login exitoso" });
  } else {
    res.json({ success: false, message: "❌ Usuario o clave incorrectos" });
  }
});

// Levantar servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
