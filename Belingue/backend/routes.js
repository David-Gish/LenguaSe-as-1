import express from "express";
const router = express.Router();

// simulación de base de datos temporal (en memoria)
const users = [];

// ✅ Ruta de registro
router.post("/register", (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  // Verificar si el usuario ya existe
  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return res.status(400).json({ error: "El usuario ya existe" });
  }

  // Guardar nuevo usuario
  const newUser = { id: users.length + 1, name, username, password };
  users.push(newUser);

  console.log("🆕 Usuario registrado:", newUser);
  res.json({ message: "Usuario registrado correctamente", user: newUser });
});

// ✅ Ruta de login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  res.json({ message: "Inicio de sesión exitoso", user });
});

export default router;
