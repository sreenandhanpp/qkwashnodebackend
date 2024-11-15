// User controller
const User = require('../models/user.model');
const crypto = require('crypto');

// Generate a 12-character random session token
const generateSessionToken = () => {
    return crypto.randomBytes(6).toString('hex'); // Generates a 12-character token
};

// Add or update user based on the mobile number
exports.addOrUpdateUser = async(req, res) => {
    const { usermobile, username, userstatus } = req.body;

    try {
        // Check if user with this mobile number already exists
        let user = await User.findOne({ where: { usermobile } });

        const sessionToken = generateSessionToken(); // Generate session token

        if (!user) {
            // Create new user if it doesn't exist
            user = await User.create({
                usermobile,
                username: username || null,
                userstatus: userstatus || null,
                sessionToken // Save the session token in the database
            });
        } else {
            // Update the user's information if they already exist (excluding mobile number)
            user.username = username || user.username;
            user.userstatus = userstatus || user.userstatus;
            user.sessionToken = sessionToken; // Update with new session token

            await user.save(); // Save changes
        }

        // Return the session token in the response
        res.status(200).json({
            message: 'User added or updated successfully',
            sessionToken
        });

    } catch (error) {
        console.error('Error in addOrUpdateUser:', error);
        res.status(500).json({ error: 'Failed to add or update user' });
    }
};