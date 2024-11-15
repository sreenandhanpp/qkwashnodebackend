// user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); // Adjust the path as necessary

// Add or update a user based on mobile number
router.post('/addOrUpdate', userController.addOrUpdateUser);

module.exports = router;