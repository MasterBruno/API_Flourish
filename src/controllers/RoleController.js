const Role = require('../models/Role')

module.exports = {
  async index (req, res) {
    Role.findAll().then(roles => {
      return res.json(roles)
    })
  },

  async show (req, res) {
    Role.findByPk(req.params.id).then(role => {
      return res.json(role)
    })
  }
}
