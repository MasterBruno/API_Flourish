var express = require('express');
var router = express.Router();

/* GET Listagem comments. */
router.get('/', function(req, res, next) {
    res.send('Rota comments!')
});

/* GET Busca comments por id. */
router.get('/:id', function(req, res, next) {
    res.send('Rota comments!')
});

/* POST Cadastro de comments. */
router.post('/', function(req, res, next) {
    res.send('Rota comments!')
});

/* PUT Atualiza todos os campos do comments. */
router.put('/:id', function(req, res, next) {
    res.send('Rota comments!')
});

/* PATCH Atualiza os campos passados do comments. */
router.patch('/:id', function(req, res, next) {
    res.send('Rota comments!')
});

module.exports = router;  