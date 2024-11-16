// settings.routes.js
const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings.controller'); // Adjust the path as necessary

// fetch user profile by mobile number
router.post('/userProfile', settingsController.getUserDetailsByMobileNumber);

// update user profile by mobile number
router.post('/updateProfile', settingsController.updateUserProfileByMobileNumber);

module.exports = router;