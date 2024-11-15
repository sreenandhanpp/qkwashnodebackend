// Hub controller 
const Hub = require('../models/hub.model');
const validateSessionToken = require('../utils/validateSessionToken');
const TransactionController = require('./transaction.controller'); 

// Create or update a hub (for demonstration)
exports.createOrUpdateHub = async(req, res) => {
    const {
        hubid,
        hubname,
        deviceid,
        devicetype,
        devicecondition,
        devicestatus,
        devicebookeduserid,
        devicebookeduserstarttime,
        devicebookeduserendtime,
        bookeduserselectedwashmode,
        bookeduserselecteddetergentpreference,
        bookeduserselectedduration
    } = req.body;

    try {
        // Create or update based on presence of hubid
        let hub;
        if (hubid) {
            hub = await Hub.update({
                hubname,
                deviceid,
                devicetype,
                devicecondition,
                devicestatus,
                devicebookeduserid,
                devicebookeduserstarttime,
                devicebookeduserendtime,
                bookeduserselectedwashmode,
                bookeduserselecteddetergentpreference,
                bookeduserselectedduration
            }, {
                where: { hubid }
            });
            if (hub[0] === 0) {
                return res.status(404).json({ error: 'Hub not found' });
            }
        } else {

            // Generating unique hubid
            const timestamp = Date.now(); // Current timestamp in milliseconds
            const randomFourDigit = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
            const hubid = `${timestamp}${randomFourDigit}`;

            hub = await Hub.create({
                hubid,
                hubname,
                deviceid,
                devicetype,
                devicecondition,
                devicestatus,
                devicebookeduserid,
                devicebookeduserstarttime,
                devicebookeduserendtime,
                bookeduserselectedwashmode,
                bookeduserselecteddetergentpreference,
                bookeduserselectedduration
            });
        }

        res.status(200).json(hub);
    } catch (error) {
        console.error('Error creating/updating hub:', error);
        res.status(500).json({ error: 'Failed to create/update hub' });
    }
};



// ipaddress/
// Get all details from HubTable based on hubname
exports.getHubDetailsByHubName = async(req, res) => {
    const { hubname } = req.body; // Retrieve hubname from the request body

    if (!hubname) {
        return res.status(400).json({ error: 'hubname is required' }); // Return error if hubname is not provided
    }

    try {
        // Fetch all records where hubname matches the requested hubname
        const hubs = await Hub.findAll({ where: { hubname } });

        if (hubs.length === 0) {
            return res.status(404).json({ message: 'No hubs found with the requested hubname' });
        }

        // Return all matching hub records
        res.status(200).json(hubs);

    } catch (error) {
        console.error('Error retrieving hub details:', error);
        res.status(500).json({ error: 'Failed to retrieve hub details' });
    }
};



// ipaddress/
// Update hub details based on deviceid
exports.updateHubByDeviceId = async(req, res) => {
    const { deviceid, devicecondition, devicestatus, devicebookeduserid, devicebookeduserstarttime, devicebookeduserendtime, bookeduserselectedwashmode, bookeduserselecteddetergentpreference, bookeduserselectedduration } = req.body;

    // Check if deviceid is provided
    if (!deviceid) {
        return res.status(400).json({ error: 'deviceid is required' });
    }

    try {
        // Update the hub entry by deviceid with the specified fields
        const [updated] = await Hub.update({
            devicecondition,
            devicestatus,
            devicebookeduserid,
            devicebookeduserstarttime,
            devicebookeduserendtime,
            bookeduserselectedwashmode,
            bookeduserselecteddetergentpreference,
            bookeduserselectedduration
        }, {
            where: { deviceid }
        });

        // Check if any row was updated
        if (updated) {
            const updatedHub = await Hub.findOne({ where: { deviceid } }); // Fetch the updated hub record
            return res.status(200).json(updatedHub); // Return the updated hub record
        }

        return res.status(404).json({ message: 'Hub not found' }); // Handle case where hub is not found
    } catch (error) {
        console.error('Error updating hub:', error);
        return res.status(500).json({ error: 'Failed to update hub details' });
    }
};



// ipaddress/
// Get device status by deviceid
exports.getDeviceStatusById = async(req, res) => {
    const { deviceid } = req.params; // deviceid is passed as a URL parameter

    try {
        // Find the device by deviceid
        const device = await Hub.findOne({ where: { deviceid } });

        // If device not found, return 404
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        // Return only the device status
        res.status(200).json({ devicestatus: device.devicestatus });
    } catch (error) {
        console.error('Error retrieving device status:', error);
        res.status(500).json({ error: 'Failed to retrieve device status' });
    }
};




// ipaddress/
// Update device status by deviceid
exports.updateDeviceStatusById = async(req, res) => {
    const { deviceid } = req.params; // deviceid is passed as a URL parameter
    const { devicestatus } = req.body; // New device status is in the request body

    if (!devicestatus) {
        return res.status(400).json({ message: 'devicestatus is required' });
    }

    try {
        // Find the device by deviceid
        const device = await Hub.findOne({ where: { deviceid } });

        // If device not found, return 404
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        // Update the device status
        device.devicestatus = devicestatus;
        await device.save(); // Save changes to the database

        // Return success response
        res.status(200).json({
            message: 'Device status updated successfully',
            devicestatus: device.devicestatus, // Return updated status
        });
    } catch (error) {
        console.error('Error updating device status:', error);
        res.status(500).json({ error: 'Failed to update device status' });
    }
};


// Book device based on both deviceId and hubId
exports.bookDevice = async (req, res) => {
    const { 
        hubid, 
        deviceid, 
        devicecondition, 
        devicestatus, 
        device_booked_user_id,
        device_booked_user_mobile_no, 
        device_booked_user_start_time, 
        device_booked_user_end_time, 
        booked_user_selected_wash_mode, 
        booked_user_selected_detergent_preference, 
        booked_user_selected_duration,
        transactionstatus,
        paymentid,
        transactiontime,
        transactionamount,
        sessiontoken,
    } = req.body;

    // Validate session token
    const isValidSession = await validateSessionToken(device_booked_user_mobile_no, sessiontoken);
    if (!isValidSession) {
        // Return error response if session token is invalid
        return res.status(401).json({ message: "Invalid session token" });
    }

    // Check if hubid and deviceid are provided
    if (!hubid || !deviceid) {
        // Return error response if hubid and deviceid are not provided
        res.status(400).json({ error: 'hubid and deviceid are required' });
    }

    try {
        // Update the hub entry by hubid and deviceid with the specified fields
        const [updated] = await Hub.update({
            devicecondition,
            devicestatus,
            device_booked_user_mobile_no,
            device_booked_user_start_time,
            device_booked_user_end_time,
            booked_user_selected_wash_mode,
            booked_user_selected_detergent_preference,
            booked_user_selected_duration
        }, {
            where: { hubid, deviceid } // Match both hubid and deviceid
        });

        // Check if any row was updated
        if (updated) {
            // Transaction details
            const transactionDetails = {
                transactionstatus: transactionstatus || 'Failed', // Default to 'Failed' if not provided
                transactionamount,
                paymentid,
                transactionuserid: device_booked_user_id, 
                transactiontime: transactiontime // Current timestamp
            };

            // Call the createTransaction function
            await TransactionController.createTransaction({ body: transactionDetails }, res);

            // Return success response
            res.status(200).json({ message: 'Device booked successfully' });
        }else{
            // Return error response if hub or device not found
            res.status(404).json({ error: 'Hub or device not found' });
        }

    } catch (error) {
        console.error('Error updating hub:', error);
        // Return error response if any error occurs
        res.status(500).json({ error: 'Failed to update hub details' });
    }
};
