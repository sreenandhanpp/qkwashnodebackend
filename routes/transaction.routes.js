// transaction.routes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller'); // Adjust the path as necessary

// Create a new transaction
router.post('/', transactionController.createTransaction);

// Update a transaction by transactionid
router.put('/', transactionController.updateTransaction);

// Delete a transaction by transactionid
router.delete('/', transactionController.deleteTransaction);

module.exports = router;