var express = require('express');
var router = express.Router();

/* GET Listagem role. */
router.get('/', function(req, res, next) {
    res.send('Rota role!')
});

/* GET Busca role por id. */
router.get('/:id', function(req, res, next) {
    res.send('Rota role!')
});


module.exports = router;  