var express = require('express');
var router = express.Router();
var StatusDreamController = require('../controllers/StatusDreamController');

/* GET Listagem status_dream. */
router.get('/', StatusDreamController.index);

/* GET Busca status_dream por id. */
router.get('/:id', StatusDreamController.getById);

module.exports = router;  