// In models/History.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const History = sequelize.define('History', {
    Historyid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hubid: {
        type: DataTypes.INTEGER,
        allowNull: false, // No unique constraint anymore
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
    booked_user_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    device_booked_user_mobile_no: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    // other fields if needed
}, {
    tableName: 'Historytable',
    timestamps: false
});

module.exports = History;