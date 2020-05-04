const Dream = require('../models/Dream');

module.exports = {
  async index(req, res) {
    Dream.findAll().then(dreams => {
      return res.json(dreams);
    });
  },

  async getById(req, res){
    Dream.findByPk(req.params.id).then(dreams => {
      return res.json(dreams);
    });
  }
}