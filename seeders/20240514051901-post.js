'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        post_image: "post_1.png",
        post_description: "desc",
        UserId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_image: "post_2.png",
        post_description: "desc",
        UserId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_image: "post_3.png",
        post_description: "desc",
        UserId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_image: "post_1.png",
        post_description: "desc",
        UserId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_image: "post_1.png",
        post_description: "desc",
        UserId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Post', null, {});
  }
};
