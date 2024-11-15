// hub.routes.js
const express = require('express');
const router = express.Router();
const hubController = require('../controllers/hub.controller'); // Adjust the path as necessary

// Create or update a hub
router.post('/hubs', hubController.createOrUpdateHub);

// Get all details from HubTable based on hubname
router.post('/hubs/details', hubController.getHubDetailsByHubName);

// Update hub details based on deviceid
router.put('/hubs/device/:deviceid', hubController.updateHubByDeviceId);

// Get device status by deviceid
router.get('/hubs/status/:deviceid', hubController.getDeviceStatusById);

// Update device status by deviceid
router.put('/hubs/status/:deviceid', hubController.updateDeviceStatusById);

// book device status by deviceid
router.post('/hubs/book', hubController.bookDevice);

module.exports = router;