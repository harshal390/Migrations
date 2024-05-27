const express = require('express');
const { getUsers } = require('../controllers/oneToManyRelationController');
const route = express.Router();

route.get('/', getUsers);

module.exports = route;