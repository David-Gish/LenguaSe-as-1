const express = require("express");

// objetos para llamar los metodos express
const app = express();


//Ruta de archivo estadisticos
app.use(express.static("public"));

//Configuracion del puerto para el servidor local
app.listen(3000, function(){
    console.log("El Servidor local es http://localhost:3000");
});
