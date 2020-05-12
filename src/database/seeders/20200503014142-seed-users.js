'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'Usuário',
        last_name: 'Teste 1',
        email: 'usuario@email.com',
        password: '12345678',
        birth_date: new Date(),
        role_id: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
