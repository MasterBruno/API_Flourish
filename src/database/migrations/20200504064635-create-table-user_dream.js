'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_dreams', {
      id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
      },
      id_dream:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'dreams',
          },
          key: 'id'
        },
      },
      id_post:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'posts',
          },
          key: 'id'
        },
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_dreams');
  }
};
