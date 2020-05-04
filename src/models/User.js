const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init ({
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      id_role: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Role',
          key: 'id',
        }
      }
    },{
      sequelize,
      tableName: 'users',
    })

    return this
  }

  getFullname() {
    return [this.firstname, this.lastname].join(' ');
  }
}

module.exports = User;