'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      atendent_name: {
        type: Sequelize.STRING
      },
      client_name: {
        type: Sequelize.STRING
      },
      table_number: {
        type: Sequelize.STRING
      },
      items: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      order_total: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};