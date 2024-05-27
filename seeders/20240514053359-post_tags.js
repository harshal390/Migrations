'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_Tags',
      [
        {
          postId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          tagId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          tagId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          tagId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          tagId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          tagId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Post_Tags', null, {});
  }
};
