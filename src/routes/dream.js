var express = require('express');
var router = express.Router();
var DreamController = require('../controllers/DreamController');

/* GET Listagem dream. */
router.get('/', DreamController.index);

/* GET Busca dream por id. */
router.get('/:id', DreamController.getById);

/* POST Cadastro de usuário. */
router.post('/', function(req, res, next) {
    res.send('Rota dream!')
});

/* PUT Atualiza todos os campos do dream. */
router.put('/:id', function(req, res, next) {
    res.send('Rota dream!')
});

/* PATCH Atualiza os campos passados do dream. */
router.patch('/:id', function(req, res, next) {
    res.send('Rota dream!')
});

module.exports = router;  