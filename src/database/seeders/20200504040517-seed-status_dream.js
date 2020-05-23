'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('status_dreams', [
      {
        description_status: 'Realizado'
      },
      {
        description_status: 'Realizando'
      },
      {
        description_status: 'Não Realizado'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('status_dreams', null, {})
  }
}
