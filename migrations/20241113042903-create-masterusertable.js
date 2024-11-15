'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('masterusertable', {
            masteruserid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true, // Auto-increment for primary key
                allowNull: false
            },
            masterusermobile: {
                type: Sequelize.STRING,
                unique: true, // Ensure masterusermobile is unique
                allowNull: false
            },
            masterusername: {
                type: Sequelize.STRING,
                allowNull: true
            },
            masteruserstatus: {
                type: Sequelize.STRING,
                allowNull: true
            },
            masterusersessionToken: {
                type: Sequelize.STRING,
                allowNull: true
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('masterusertable');
    }
};
