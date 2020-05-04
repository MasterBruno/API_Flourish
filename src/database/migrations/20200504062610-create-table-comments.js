'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      text_comments: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_post:{
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'posts',
          },
          key: 'id'
        },
      },
      id_user:{
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};
