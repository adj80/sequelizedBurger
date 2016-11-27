'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

  return queryInterface.bulkInsert('Burgers',
    [
      {
      name: 'Burger #1',
      devoured: true
      },
      {
      name: 'Burger #2',
      devoured: false
      }
      name: 'Burger #3',
      devoured: true
      }
    ], {});
  },  


  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Burgers', null, {});

  }
};



