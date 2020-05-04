'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_dreams', [
      {
        id_user: 1,
        id_dream:1,
        id_post: 1,
      },
      {
        id_user: 1,
        id_dream:2,
        id_post: 2,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_dreams', null, {});
  }
};
