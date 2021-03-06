'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      };
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      } 
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.droptable('Burgers');
  }
};



