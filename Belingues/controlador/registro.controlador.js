const express = require('express'),
    router = express.Router()
const service = require('../servicios/registro.servicios')
router.post('/', async (req, res) => {
    await service.ingresarestudiante(req.body)
    res.status(201).send('Registro Exitoso!.')
})
router.get('/', async (req, res) => {
    const inscritos = await service.listarestudiantesregistrados()
    res.send(inscritos)
})
router.get('/:documento', async (req, res) => {
    const buscarinscrito = await service.listarestudiantepordocumento(req.params.documento)
    if (buscarinscrito == undefined)
        res.status(404).json('No existe este documento : ' + req.params.documento)
    else
        res.send(buscarinscrito)
})
module.exports = router;