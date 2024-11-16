const User = require("../models/user.model");
const validateSessionToken = require("../utils/validateSessionToken");

// Function to fetch user details by mobile number
exports.getUserDetailsByMobileNumber = async (req, res) => {
  const { usermobile,sessiontoken } = req.body;
  try {

    // Validate session token
    const isValidSession = await validateSessionToken(
      usermobile,
      sessiontoken
    );

    if (!isValidSession) {
      // Return error response if session token is invalid
      res.status(401).json({ message: "Invalid session token" });
    }

    // Fetch the user by mobile number
    const user = await User.findOne({
      where: { usermobile },
    });

    // Check if user exists
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }

    // Return user details
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ error: "Failed to fetch user details" });
  }
};

// Function to update user details by mobile number
exports.updateUserProfileByMobileNumber = async (req, res) => {
    const { usermobile, sessiontoken, updateData } = req.body;
  
    try {
      // Validate session token
      const isValidSession = await validateSessionToken(usermobile, sessiontoken);
  
      if (!isValidSession) {
        // Return error response if session token is invalid
        return res.status(401).json({ message: "Invalid session token" });
      }
  
      // Fetch the user by mobile number
      const user = await User.findOne({
        where: { usermobile },
      });
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update user details
      await user.update(updateData);
  
      // Return updated user details
      res.status(200).json({ message: "User details updated successfully", user });
    } catch (error) {
      console.error("Error updating user details:", error);
      return res.status(500).json({ error: "Failed to update user details" });
    }
  };
  
