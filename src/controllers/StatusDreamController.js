const StatusDream = require('../models/StatusDream')

module.exports = {
  async index (req, res) {
    StatusDream.findAll().then(status => {
      return res.json(status)
    })
  },

  async getById (req, res) {
    StatusDream.findByPk(req.params.id).then(status => {
      return res.json(status)
    })
  }
}
