var express = require('express');
var router = express.Router();

/* GET Listagem dream. */
router.get('/', function(req, res, next) {
    res.send('Rota dream!')
});

/* GET Busca dream por id. */
router.get('/:id', function(req, res, next) {
    res.send('Rota dream!')
});

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