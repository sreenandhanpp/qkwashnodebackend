const User = require('../models/user.model');
const crypto = require('crypto');

// Simple in-memory storage for OTPs; replace with database storage in production
let otpStore = {};

// Generate a 4-digit random OTP
const generateOTP = () => {
    return crypto.randomInt(1000, 9999).toString(); // Generates a 4-digit OTP
};

// Send OTP to user and log in the terminal, return in response
exports.sendOtp = async(req, res) => {
    const { usermobile } = req.body;
    let user_type = "Existing";
    try {
        // Check if user exists
        const user = await User.findOne({ where: { usermobile } });
        if (!user) {
            user_type = "New";
        }

        // Generate and store OTP
        const otp = generateOTP();
        otpStore[usermobile] = otp; // Store OTP in memory for testing

        // Log OTP in terminal for testing purposes
        console.log(`Generated OTP for ${usermobile}: ${otp}`);

        // Respond with OTP (for testing purposes only)
        res.status(200).json({
            message: 'OTP generated successfully',
            otp,
            user_type, // Return OTP for testing only; remove in production
        });

    } catch (error) {
        console.error('Error generating OTP:', error);
        res.status(500).json({ error: 'Failed to generate OTP' });
    }
};