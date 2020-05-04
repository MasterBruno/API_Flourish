'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        text_comments: 'Guarde 100 reais por mês!!!',
        id_post: 1,
        id_user: 1
      },
      {
        text_comments: 'Guarde 100 reais por mês!!!',
        id_post: 2,
        id_user: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
