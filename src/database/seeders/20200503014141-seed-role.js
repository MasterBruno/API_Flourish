'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        description_role: 'Conselheiro'
      },
      {
        description_role: 'Investidor'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {})
  }
}
