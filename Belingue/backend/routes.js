const express = require("express");
const router = express.Router();

router.get("/lessons", (req, res) => {
  res.json([
    { id: 1, title: "Saludos básicos", description: "Aprende cómo saludar en lengua de señas." },
    { id: 2, title: "Colores", description: "Conoce los colores más comunes en señas." },
    { id: 3, title: "Números", description: "Practica los números del 1 al 10." },
  ]);
});

module.exports = router;
