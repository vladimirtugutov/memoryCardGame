'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games', [
      {
        player: 'Anna',
        score: 20,
        deck: 'cats',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player: 'Alex',
        score: 10,
        deck: 'cats',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player: 'Vova',
        score: 15,
        deck: 'cats',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
