const express = require('express');
const cors = require('cors');
const mysqlpool = require('../../backend/db'); 

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/tblprueba', async (req, res) => {
  try {
    const [rows] = await mysqlpool.query('SELECT * FROM tblprueba'); 
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en la consulta' });
  }
});

// Levantar servidor
app.listen(3000, () => {
  console.log('Servidor backend corriendo en http://localhost:3000');
});
