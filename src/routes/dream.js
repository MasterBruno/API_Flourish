var express = require('express')
var router = express.Router()
var DreamController = require('../controllers/DreamController')

/* GET Listagem dream. */
router.get('/', DreamController.index)

/* GET Busca dream por id. */
router.get('/:id', DreamController.getById)

/* POST Cadastro de usuário. */
router.post('/', DreamController.store)

/* PUT Atualiza todos os campos do dream. */
router.put('/:id', DreamController.update)

/* PATCH Atualiza os campos passados do dream. */
router.patch('/:id', DreamController.update)

/* Delete Apaga o dream de acordo com o Id. */
router.delete('/:id', DreamController.destroy)

module.exports = router
