'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      text_comments: {
        type: Sequelize.STRING,
        allowNull: false
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'posts'
          },
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments')
  }
}
