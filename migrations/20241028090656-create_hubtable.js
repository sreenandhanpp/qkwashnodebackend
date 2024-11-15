'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hubtable', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true, // This is now the primary key
                allowNull: false,
            },
            hubid: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            hubname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            deviceid: {
                type: Sequelize.INTEGER,
                unique: true, // Ensure deviceid is unique
                allowNull: false,
            },
            devicetype: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            devicecondition: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            devicestatus: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            device_booked_user_mobile_no: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            device_booked_user_start_time: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            device_booked_user_end_time: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            booked_user_selected_wash_mode: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            booked_user_selected_detergent_preference: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            booked_user_selected_duration: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            booked_user_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            actual_quick_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            offer_quick_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            actual_steam_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            offer_steam_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            actual_other_three_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            offer_other_three_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            actual_deterg_plus_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            offer_deterg_plus_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            actual_stiff_ultra_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            offer_stiff_ultra_amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            owner_email_id: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            latitude: {
                type: Sequelize.DECIMAL(9, 6), // More precise for geographical data
                allowNull: true,
            },
            longitude: {
                type: Sequelize.DECIMAL(9, 6), // More precise for geographical data
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('hubtable');
    }
};
