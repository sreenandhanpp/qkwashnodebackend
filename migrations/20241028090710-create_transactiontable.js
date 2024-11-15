'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('transactiontable', {
            transactionid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            transactionstatus: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            transactionamount: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            transactionuserid: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            transactiontime: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            paymentid: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('transactiontable');
    }
};