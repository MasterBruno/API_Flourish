const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    Post.findAll().then(posts => {
      return res.json(posts);
    });
  },

  async getById(req, res){
    Post.findByPk(req.params.id).then(post => {
      return res.json(post);
    });
  }
}