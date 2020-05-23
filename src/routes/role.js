var express = require('express')
var router = express.Router()
var RoleController = require('../controllers/RoleController')

/* GET Listagem role. */
router.get('/', RoleController.index)

/* GET Busca role por id. */
router.get('/:id', RoleController.getById)

module.exports = router
