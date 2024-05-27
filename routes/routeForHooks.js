const express = require('express');
const route = express.Router();
const { hashingPasswordController,updatePasswordController } = require('../controllers/hashingPasswordController');
route.post('/hashing-password', hashingPasswordController);
route.post('/update-password',updatePasswordController);

module.exports = route;