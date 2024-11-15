// utils/validateSessionToken.js
const User = require('../models/user.model'); // Adjust path if needed

// Function to validate session token
const validateSessionToken = async (usermobile, sessiontoken) => {
    try {
        console.log(sessiontoken);
        // Find the user by usermobile
        const user = await User.findOne({
            where: { usermobile }
        });

        // Check if user exists and if session tokens match
        if (user && user.sessionToken === sessiontoken) {
            return true; // Valid session
        } else {
            return false; // Invalid session
        }
    } catch (error) {
        console.error("Error validating session token:", error);
        return false; // Default to invalid if an error occurs
    }
};

module.exports = validateSessionToken;
