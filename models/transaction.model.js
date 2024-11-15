// transaction.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Ensure this path is correct

const Transaction = sequelize.define(
  "Transaction",
  {
    transactionid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paymentid:{
      type: DataTypes.STRING
    },
    transactionstatus: { 
        type: DataTypes.STRING 
    },
    transactionamount: { 
        type: DataTypes.FLOAT 
    },
    transactionuserid: { 
        type: DataTypes.INTEGER 
    },
    transactiontime: { 
        type: DataTypes.DATE 
    },
  },
  {
    tableName: "transactiontable",
    timestamps: false,
  }
);

module.exports = Transaction;
