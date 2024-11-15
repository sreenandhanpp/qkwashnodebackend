'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Servicetable', {
            Serviceid: {
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
            service_booked_time: {
                type: Sequelize.DATE,
                allowNull: true
            },
            servicestatus: {
                type: Sequelize.STRING,
                allowNull: true
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Servicetable');
    }
};
