const { Model, DataTypes } = require('sequelize')

class Dream extends Model {
  static init (sequelize) {
    super.init({
      description_dream: DataTypes.STRING,
      realization_at: DataTypes.DATE,
      limit_value: DataTypes.FLOAT,
      status_dream_id: DataTypes.INTEGER
    }, {
      sequelize,
      timestamps: false,
      tableName: 'dreams'
    })
    return this
  }
}

Dream.associate = function (models) {
  Dream.belongsTo(models.StatusDream, { foreignKey: 'status_dream_id', as: 'status', onUpdate: 'cascade' })
  Dream.hasMany(models.Post, { as: 'posts' })
}

module.exports = Dream
