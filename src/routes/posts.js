var express = require('express');
var router = express.Router();
var PostController = require('../controllers/PostController');

/* GET Listagem posts. */
router.get('/', PostController.index);

/* GET Busca posts por id. */
router.get('/:id', PostController.getById);

/* POST Cadastro de posts. */
router.post('/', function(req, res, next) {
    res.send('Rota posts!')
});

/* PUT Atualiza todos os campos do posts. */
router.put('/:id', function(req, res, next) {
    res.send('Rota posts!')
});

/* PATCH Atualiza os campos passados do posts. */
router.patch('/:id', function(req, res, next) {
    res.send('Rota posts!')
});

module.exports = router;  