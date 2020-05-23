const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      role_id: DataTypes.INTEGER
    }, {
      sequelize,
      tableName: 'users'
    })
    return this
  }
}

User.getFullname = function () {
  return [this.firstname, this.lastname].join(' ')
}

User.associate = function (models) {
  User.belongsTo(models.Role, { foreignKey: 'role_id', as: 'role' })
  User.hasMany(models.Post, { as: 'posts' })
  User.hasMany(models.Comment, { as: 'comments' })
}

module.exports = User
