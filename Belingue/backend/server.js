const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbsenasconecta'
});
db.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL');
});
app.post('/api/usuarios', (req, res) => {
    const { nombre, correo, contrasena } = req.body;
    const sql = 'INSERT INTO tblusuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
    db.query(sql, [nombre, correo, contrasena], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ mensaje: 'Usuario registrado' });
    });
});
app.get('/api/lecciones', (req, res) => {
    res.json([
        { id: 1, titulo: 'Saludos básicos', descripcion: 'Aprende a saludar en LSC' },
        { id: 2, titulo: 'Familia', descripcion: 'Señas para miembros de la familia' },
        { id: 3, titulo: 'Saludos básicos', descripcion: 'Aprende a saludar en LSC' }
    ]);
});
app.listen(3000, () => console.log('Servidor Express en puerto 3000'));