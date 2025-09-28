const db = require('../db')
//Registrar Estudiante
module.exports.ingresarestudiante = async (obj) => {
    const [[[{registro}]]] = await db.query("insert into dbprueba.tblestudiante values (null,?,?,?,?,?,?,?,?,?,?,current_timestamp)",
        [
            obj.tipodocumento,
            obj.documento,
            obj.nombreuno,
            obj.nombredos,
            obj.apellidouno,
            obj.apellidodos,
            obj.sexo,
            obj.rh,
            obj.direccion,
            obj.telefono
        ])
    return registro;
}
//Listar todos los estudiantes
module.exports.listarestudiantesregistrados = async () => {
    const [registro] = await db.query("select * from dbprueba.tblestudiante;")
    return registro;
}
module.exports.listarestudiantepordocumento = async (documento) => {
    const [[registro]] = await db.query("select * from dbprueba.tblestudiante where documento = ", [documento])
    return registro;
}
module.exports.eliminarestudiantepordocumento = async (documento) => {
    const [{registro}] = await db.query("DELETE FROM dbprueba.tblestudiante WHERE documento = ?", [documento])
    return registro;
}