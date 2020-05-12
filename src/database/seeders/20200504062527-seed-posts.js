'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        description_post: 'Viajar para a Europa',
        user_id: 1,
        dream_id: 1,
      },
      {
        description_post: 'Construir minha mansão',
        user_id: 1,
        dream_id: 2,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
