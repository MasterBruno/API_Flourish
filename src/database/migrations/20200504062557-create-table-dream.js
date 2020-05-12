'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dreams', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description_dream: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      realization_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      limit_value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      status_dream_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'status_dreams',
          },
          key: 'id'
        },
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dreams');
  }
};
