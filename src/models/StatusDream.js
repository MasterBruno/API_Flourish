const { Model, DataTypes } = require('sequelize');

class StatusDream extends Model {
	static init(sequelize) {
		super.init ({
			description_status: DataTypes.STRING,
		},{
      sequelize,
      timestamps: false,
		})
		return this
	}
}

module.exports = StatusDream;