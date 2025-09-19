const express = requiere("express"),
router = express.router()
const service = require ('../servicios/prueba.servicios')

router.get('/', async (req, res)=>{
      const inscritos = await service.mostrardatos()
    res.send(inscritos)
})

module.exports = router;