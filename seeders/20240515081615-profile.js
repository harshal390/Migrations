'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profiles', [
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_image: "profile-1.png",
        username: "harshal3445",
        invoice_address: "L.D. College of Engineering,Ahmedabad.",
        userId: "14",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
