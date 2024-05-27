'use strict';
const { Model } = require('sequelize');
const md5 = require("md5");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    static associate(models) {
    }
  }
  UserDetail.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNo: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDetail',
    hooks: {
      beforeCreate: async (UserDetail, options) => {
        UserDetail.salt = await bcrypt.genSalt(5);
        UserDetail.token = new Date().getTime().toString();
        UserDetail.password = md5(UserDetail.password);
      },
      beforeUpdate: async(UserDetail,options)=>{
        UserDetail.password = md5(UserDetail.password);
        // console.log("before update");
      },
      // afterUpdate: async (UserDetail, options) => {
      //   console.log("after update");
      //   UserDetail.password = md5(UserDetail.password);
      // }
    }
  });
  return UserDetail;
};