'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      description_post: {
        type: Sequelize.STRING,
        allowNull: false
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
      dream_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'dreams'
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
    return queryInterface.dropTable('posts')
  }
}
