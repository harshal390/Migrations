const express = require('express');
const route = express.Router();
const { addUser,updateUser,deleteUser, getUsers } = require('../controllers/oneToOneRelationController');

route.get('/', getUsers);
route.post("/adduser", addUser);
route.put("/updateuser/:id", updateUser);
route.delete("/deleteuser/:id", deleteUser);

module.exports = route;