'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Historytable', {
            Historyid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true, // Auto-increment for primary key
                allowNull: false
            },
            hubid: {
                type: Sequelize.INTEGER,
                allowNull: false, // Not nullable
            },
            hubname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            deviceid: {
                type: Sequelize.INTEGER,
                unique: true, // Unique constraint for deviceid
                allowNull: false
            },
            devicetype: {
                type: Sequelize.STRING,
                allowNull: true
            },
            device_booked_user_end_time: {
                type: Sequelize.DATE,
                allowNull: true
            },
            booked_user_selected_wash_mode: {
                type: Sequelize.STRING,
                allowNull: true
            },
            booked_user_selected_detergent_preference: {
                type: Sequelize.STRING,
                allowNull: true
            },
            booked_user_amount: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            device_booked_user_mobile_no: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Historytable');
    }
};
