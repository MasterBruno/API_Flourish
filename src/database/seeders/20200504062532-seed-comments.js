'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        text_comments: 'Guarde 100 reais por mês!!!',
        post_id: 1,
        user_id: 1
      },
      {
        text_comments: 'Guarde 100 reais por mês!!!',
        post_id: 2,
        user_id: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
