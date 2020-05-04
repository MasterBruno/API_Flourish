const User = require('../models/User');

module.exports = {
  async index(req, res) {
    User.findAll().then(users => {
      return res.json(users);
    });
  },

  async getById(req, res){
    User.findByPk(req.params.id).then(users => {
      return res.json(users);
    });
  },
  
  async store(req, res) {
    const { 
      first_name, last_name, email, password, birth_date, id_role
    } = req.body;

    User.create(
      { first_name, last_name, email, password, birth_date, id_role}
    ).then(user => {
      return res.json(user);
    });
  },

  async update(req, res, next) {
    let updateValues = req.body;

    User.update(
      updateValues, {where: {id: req.params.id}}
    )
    .then(result => {
      res.json((result != null) ? 
      { success: true} : {success: false})
    })
    .catch(next)
  },

  async destroy(req, res, next) {
    User.findByPk(req.params.id).then(user => {
      user.destroy().then(success => {
        res.json({message: 'Sucesso'})
      }).catch(next)
    });
  }
}