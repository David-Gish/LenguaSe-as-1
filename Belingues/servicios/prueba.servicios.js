const db = require   ('../db')

module.exports.mostrardatos = async() => {
    const [registros] = await  db.query("select * from tblprueba;")
    return registros;
}