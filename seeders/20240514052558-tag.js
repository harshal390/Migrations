'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        tag: 'quotes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'explore',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'life',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'edits',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'love',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'cute',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'foryou',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'nature',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'smile',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag: 'meme',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
