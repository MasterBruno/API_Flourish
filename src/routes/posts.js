var express = require('express');
var router = express.Router();
var PostController = require('../controllers/PostController');

/* GET Listagem posts. */
router.get('/', PostController.index);

/* GET Busca posts por id. */
router.get('/:id', PostController.getById);

/* POST Cadastro de posts. */
router.post('/', PostController.store);

/* PUT Atualiza todos os campos do posts. */
router.put('/:id', PostController.update);

/* PATCH Atualiza os campos passados do posts. */
router.patch('/:id', PostController.update);

/* DELETE Apaga o post de acordo com o Id. */
router.delete('/:id', PostController.destroy);

module.exports = router;  