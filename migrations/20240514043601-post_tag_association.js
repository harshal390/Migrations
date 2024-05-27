'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("post_tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      postId: Sequelize.INTEGER,
      tagId: Sequelize.INTEGER,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("post_tags", {
      type: "foreign key",
      fields: ["postId"],
      name: "fk_post_tags_post_postId",
      references: {
        table: "Posts",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
    await queryInterface.addConstraint("post_tags", {
      type: "foreign key",
      fields: ["tagId"],
      name: "fk_post_tags_tag_tagId",
      references: {
        table: "Tags",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("post_tags");
    await queryInterface.removeConstraint("post_tags", {
      type: "foreign key",
      fields: ["postId"],
      name: "fk_post_tags_post_postId",
      references: {
        table: "Posts",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
    await queryInterface.removeConstraint("post_tags", {
      type: "foreign key",
      fields: ["tagId"],
      name: "fk_post_tags_tag_tagId",
      references: {
        table: "Tags",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  }
};
