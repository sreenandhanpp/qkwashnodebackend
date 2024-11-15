// hub.routes.js
const express = require('express');
const router = express.Router();
const homepageController = require('../controllers/homepage.controller'); // Adjust the path as necessary

// Create or update a hub
router.post('/runningjobs', homepageController.runningJobs);
router.post('/history', homepageController.history);


module.exports = router;