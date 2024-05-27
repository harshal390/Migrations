const express = require('express');
const route = express.Router();
const { managedTransactionController, transactionController } = require('../controllers/transactionController');

// route.post('/', transactionController);
route.post('/', managedTransactionController);

module.exports = route;