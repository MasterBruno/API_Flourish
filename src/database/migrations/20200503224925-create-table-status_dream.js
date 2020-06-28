'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('status_dreams', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description_status: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, {
      timestamps: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('status_dreams')
  }
}
