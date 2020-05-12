var express = require('express');
var UserController = require('../controllers/UserController');
var router = express.Router();

/* GET Listagem usuários. */
router.get('/', UserController.index);

/* GET Busca usuário por id. */
router.get('/:id', UserController.getById);

/* POST Cadastro de usuário. */
router.post('/', UserController.store);

/* PUT Atualiza todos os campos do usuário. */
router.put('/:id', UserController.update);

/* PATCH Atualiza os campos passados do usuário. */
router.patch('/:id', UserController.update);

/* DELETE Apaga o usuário de acordo com o Id. */
router.delete('/:id', UserController.destroy);

module.exports = router;  