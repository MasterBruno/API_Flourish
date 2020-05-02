var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Home!')
});


// Rotas Usuário
router.get('/users', function(req, res, next) {
  res.send('usuario')
});

module.exports = router;
