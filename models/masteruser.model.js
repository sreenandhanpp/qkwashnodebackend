// In models/user.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MasterUser = sequelize.define('MasterUser', {
    masteruserid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    masterusermobile: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    masterusername: {
        type: DataTypes.STRING,
        allowNull: true
    },
    masteruserstatus: {
        type: DataTypes.STRING,
        allowNull: true
    },
    masterusersessionToken: {
        type: DataTypes.STRING,
        allowNull: true
    }

    // other fields if needed
}, {
    tableName: 'masterusertable',
    timestamps: false
});

module.exports = MasterUser;