var express = require('express')
var router = express.Router()
var CommentController = require('../controllers/CommentController')

/* GET Listagem comments. */
router.get('/', CommentController.index)

/* GET Busca comments por id. */
router.get('/:id', CommentController.show)

/* GET Busca comments por id do Post. */
router.get('/post/:id', CommentController.getByIdPost)

/* POST Cadastro de comments. */
router.post('/', CommentController.store)

/* PUT Atualiza todos os campos do comments. */
router.put('/:id', CommentController.update)

/* PATCH Atualiza os campos passados do comments. */
router.patch('/:id', CommentController.update)

/* DELETE Apaga o comments de acordo com o id. */
router.delete('/:id', CommentController.destroy)

module.exports = router
