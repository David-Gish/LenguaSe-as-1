let mysql = require("mysql");


let conexion = mysql.createConnection({
    host: "localhost",
    database: "lenguaSe",
    user: "root",
    password: ""
});

conexion.connect(function(error){
       if(error){
        throw err;
       } else {
        console.log("conexion exitosa");
     
       }
});

const categorias = "SELECT * FROM curso";
conexion.query(categorias,function(error,lista){
        if(error){
        throw error;
       } else {
        console.log(lista.length);
       }
})

conexion.end();