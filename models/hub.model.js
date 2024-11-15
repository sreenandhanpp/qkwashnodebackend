// hub.model.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

class Hub extends Model {}

Hub.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, // Primary key for this model
        allowNull: false
    },
    hubid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hubname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deviceid: {
        type: DataTypes.INTEGER,
        unique: true, // Unique constraint remains for deviceid
        allowNull: false
    },
    devicetype: {
        type: DataTypes.STRING,
        allowNull: true
    },
    devicecondition: {
        type: DataTypes.STRING,
        allowNull: true
    },
    devicestatus: {
        type: DataTypes.STRING,
        allowNull: true
    },
    device_booked_user_mobile_no: {
        type: DataTypes.STRING,
        allowNull: true
    },
    device_booked_user_start_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    device_booked_user_end_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    booked_user_selected_wash_mode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    booked_user_selected_detergent_preference: {
        type: DataTypes.STRING,
        allowNull: true
    },
    booked_user_selected_duration: {
        type: DataTypes.STRING,
        allowNull: true
    },
    booked_user_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    actual_quick_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    offer_quick_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    actual_steam_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    offer_steam_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    actual_other_three_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    offer_other_three_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    actual_deterg_plus_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    offer_deterg_plus_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    actual_stiff_ultra_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    offer_stiff_ultra_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    owner_email_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    latitude: {
        type: DataTypes.DECIMAL(9, 6), // More precise for geographical data
        allowNull: true
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 6), // More precise for geographical data
        allowNull: true
    },
}, {
    sequelize, // Pass the connection instance
    modelName: 'Hub', // Model name
    tableName: 'hubtable', // Table name in the database
    timestamps: true // Optional: Add createdAt and updatedAt timestamps
});

// Export the model
module.exports = Hub;
