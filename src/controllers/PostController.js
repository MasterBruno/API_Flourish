const Post = require('../models/Post')

module.exports = {
  async index (req, res) {
    Post.findAll().then(posts => {
      return res.json(posts)
    })
  },

  async show (req, res) {
    Post.findByPk(req.params.id, {
      include: { association: 'comments' }
    }).then(post => {
      return res.json(post)
    })
  },

  async store (req, res) {
    const {
      description_post, user_id, dream_id
    } = req.body

    Post.create(
      { description_post, user_id, dream_id }
    ).then(post => {
      return res.json(post)
    })
  },

  async update (req, res, next) {
    const updateValues = req.body

    Post.update(
      updateValues, { where: { id: req.params.id } }
    )
      .then(result => {
        res.json((result != null)
          ? { success: true } : { success: false })
      })
      .catch(next)
  },

  async destroy (req, res, next) {
    Post.findByPk(req.params.id).then(post => {
      post.destroy().then(success => {
        res.json({ message: 'Sucesso' })
      }).catch(next)
    })
  }
}
