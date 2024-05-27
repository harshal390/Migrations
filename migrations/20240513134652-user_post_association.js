'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Posts',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );
    await queryInterface.addConstraint("Posts", {
      type: "foreign key",
      fields: ["userId"],
      name: "fk_posts_user_userId",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Posts", "fk_posts_user_userId", {});
    await queryInterface.removeColumn(
      'Posts',
      'userId',
      Sequelize.INTEGER
    );


  }
};
