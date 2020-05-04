const Comment = require('../models/Comment');

module.exports = {
  async index(req, res) {
    Comment.findAll().then(comments => {
      return res.json(comments);
    });
  },

  async getById(req, res){
    Comment.findByPk(req.params.id).then(comment => {
      return res.json(comment);
    });
  }
}