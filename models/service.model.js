// In models/Service.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
    Serviceid: {
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
    service_booked_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    servicestatus: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // other fields if needed
}, {
    tableName: 'Servicetable',
    timestamps: false
});

module.exports = Service;