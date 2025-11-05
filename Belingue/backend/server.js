const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión con MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbsenasconecta'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ Conectado a MySQL');
});

// Endpoint para registrar usuarios
app.get('/api/usuarios', (req, res) => {
  const sql = 'SELECT * FROM tblusuarios';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


// ✅ Nuevo endpoint: obtener lecciones desde la base de datos
app.get('/api/lecciones', (req, res) => {
    const sql = 'SELECT * FROM tbllecciones';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener las lecciones:', err);
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(4000, () => console.log('Servidor Express en puerto 4000'));

