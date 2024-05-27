const express = require('express');
const { getPosts } = require('../controllers/manyToManyRelationController');
const route = express.Router();

route.get('/', getPosts)

module.exports = route;