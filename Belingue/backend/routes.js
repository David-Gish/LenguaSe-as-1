import express from "express";

const router = express.Router();

let estudiantes = [];

// Obtener todos los estudiantes
router.get("/prueba", (req, res) => {
  res.json(estudiantes);
});

// Registrar nuevo estudiante
router.post("/prueba", (req, res) => {
  const nuevo = req.body;
  nuevo.codigo = estudiantes.length + 1;
  nuevo.fecha = new Date().toISOString().split("T")[0];
  estudiantes.push(nuevo);
  res.status(201).json({ mensaje: "Estudiante guardado", estudiante: nuevo });
});

export default router;
