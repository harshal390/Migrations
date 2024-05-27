'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNo: DataTypes.STRING,
    about: DataTypes.TEXT,
    isDeleted: DataTypes.TINYINT,
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeValidate: (User, options) => {
        User.email =`newEmail${User.email}`;
      },
      afterValidate: (User, options) => {
        User.email =`${User.email}isaftervalidateemail`;
      },
    },
  });
  return User;
};