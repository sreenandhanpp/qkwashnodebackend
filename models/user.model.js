// In models/user.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usermobile: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userstatus: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sessionToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numberofWashes: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    // other fields if needed
}, {
    tableName: 'usertable',
    timestamps: false
});

module.exports = User;