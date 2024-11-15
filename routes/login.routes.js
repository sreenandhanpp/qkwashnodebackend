const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller'); // Import the controller

// Define the route and map to `sendOtp`
router.post('/send-otp', loginController.sendOtp);

module.exports = router;