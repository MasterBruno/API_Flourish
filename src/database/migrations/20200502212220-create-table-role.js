'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('roles', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description_role: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, {
      timestamps: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('roles')
  }
}
