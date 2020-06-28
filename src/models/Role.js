const { Model, DataTypes } = require('sequelize')

class Role extends Model {
  static init (sequelize) {
    super.init({
      description_role: DataTypes.STRING
    }, {
      sequelize,
      timestamps: false,
      tableName: 'roles'
    })
    return this
  }
}

Role.associate = function (models) {
  Role.hasMany(models.User, { as: 'user_role' })
}

module.exports = Role
