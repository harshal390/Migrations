'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Profiles',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );
    await queryInterface.addConstraint("Profiles", {
      type: "foreign key",
      fields: ["userId"],
      name: "fk_profile_user_userId",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Profiles", "fk_profile_user_userId", {});
    await queryInterface.removeColumn(
      'Profiles',
      'userId',
      Sequelize.INTEGER
    );
  }
};
