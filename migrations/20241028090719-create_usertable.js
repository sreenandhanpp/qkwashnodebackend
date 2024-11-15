'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usertable', {
            userid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            usermobile: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            userstatus: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            sessionToken: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            numberofWashes: {
                type: Sequelize.INTEGER,  // Corrected from DataTypes.INTEGER to Sequelize.INTEGER
                allowNull: true
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('usertable');
    }
};
