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
  },

  async store(req, res) {
    const { 
      description_dream, realization_at, limit_value
    } = req.body;

    Dream.create(
      { description_dream, realization_at, limit_value, status_dream_id:1}
    ).then(dream => {
      return res.json(dream);
    });
  },

  async update(req, res, next) {
    let updateValues = req.body;

    Dream.update(
      updateValues, {where: {id: req.params.id}}
    )
    .then(result => {
      res.json((result != null) ? 
      { success: true} : {success: false})
    })
    .catch(next)
  },

  async destroy(req, res, next) {
    Dream.findByPk(req.params.id).then(dream => {
      dream.destroy().then(success => {
        res.json({message: 'Sucesso'})
      }).catch(next)
    });
  }
}