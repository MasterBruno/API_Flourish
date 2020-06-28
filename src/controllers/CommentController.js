const Comment = require('../models/Comment')

module.exports = {
  async index (req, res) {
    Comment.findAll().then(comments => {
      return res.json(comments)
    })
  },

  async show (req, res) {
    Comment.findByPk(req.params.id).then(comment => {
      return res.json(comment)
    })
  },

  async store (req, res) {
    const {
      text_comments, post_id, user_id
    } = req.body

    Comment.create(
      { text_comments, post_id, user_id }
    ).then(comment => {
      return res.json(comment)
    })
  },

  async update (req, res, next) {
    const updateValues = req.body

    Comment.update(
      updateValues, { where: { id: req.params.id } }
    )
      .then(result => {
        res.json((result != null)
          ? { success: true } : { success: false })
      })
      .catch(next)
  },

  async destroy (req, res, next) {
    Comment.findByPk(req.params.id).then(comment => {
      comment.destroy().then(success => {
        res.json({ message: 'Sucesso' })
      }).catch(next)
    })
  },

  //  Metódos personalizados
  async getByIdPost(req, res, next) {
    if(!req.params.id) return res.json({ success: false, message: 'Id nulo ou inválido' })

    Comment.findAndCountAll({
      where:{
        post_id: req.params.id
      }
    })
    .then(comments => {return res.json(comments)})
    .catch(error => { return res.json({ success: false, erro: error.message })})
  }
}
