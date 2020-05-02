var express = require('express');
var router = express.Router();

/* GET Listagem status_dream. */
router.get('/', function(req, res, next) {
    res.send('Rota status_dream!')
});

/* GET Busca status_dream por id. */
router.get('/:id', function(req, res, next) {
    res.send('Rota status_dream!')
});

module.exports = router;  