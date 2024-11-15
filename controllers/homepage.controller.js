// homepage.controller.js
const Hub = require('../models/hub.model');
const History = require('../models/history.model');
const validateSessionToken = require('../utils/validateSessionToken'); // Import validation function
const { Op } = require('sequelize');

exports.runningJobs = async (req, res) => {
    const { usermobile, sessiontoken } = req.body;

    // Validate the session token
    const isValidSession = await validateSessionToken(usermobile, sessiontoken);
    if (!isValidSession) {
        return res.status(401).json({ message: "Invalid session token" });
    }

    // Fetch running jobs if the session is valid
    try {
        const jobs = await Hub.findAll({
            attributes: ['hubname', 'deviceid', 'devicetype', 'devicestatus', 'device_booked_user_end_time'],
            where: {
                devicestatus: { [Op.ne]: 'finish' },
                device_booked_user_mobile_no: usermobile
            }
        });

        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching running jobs:", error);
        res.status(500).json({ message: "Error fetching running jobs", error });
    }
};




// History controller to fetch user history based on mobile number
exports.history = async (req, res) => {
    const { usermobile, sessiontoken } = req.body;

    // Step 1: Validate session token
    const isValidSession = await validateSessionToken(usermobile, sessiontoken);
    if (!isValidSession) {
        return res.status(401).json({ message: "Invalid session token" });
    }

    // Step 2: Query the History table for the user's booking history
    try {
        const historyRecords = await History.findAll({
            attributes: [
                'hubname',
                'deviceid',
                'devicetype',
                'device_booked_user_end_time',
                'booked_user_amount'
            ],
            where: {
                device_booked_user_mobile_no: usermobile
            }
        });

        // Step 3: Send the retrieved history records in the response
        res.status(200).json(historyRecords);

    } catch (error) {
        console.error("Error fetching history:", error);
        res.status(500).json({ message: "Error fetching history", error });
    }
};