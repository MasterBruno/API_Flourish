const { Model, DataTypes } = require('sequelize');

class Dream extends Model {
  static init(sequelize) {
    super.init ({
      description_dream: DataTypes.STRING,
      realization_at: DataTypes.DATE,
      limit_value: DataTypes.FLOAT,
      id_status: {
        type: DataTypes.INTEGER,
        references: {
          model: 'StatusDream',
          key: 'id',
        }
      }
    },{
      sequelize,
      timestamps: false,
      tableName: 'dreams',
    })

    return this
  }
}

module.exports = Dream;