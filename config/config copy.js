// Configuration settings 
require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER || 'root', // Default username
        password: process.env.DB_PASSWORD || '', // Default password
        database: process.env.DB_NAME || 'your_database_name', // Default database name
        host: process.env.DB_HOST || '127.0.0.1', // Default host
        dialect: process.env.DB_DIALECT || 'mysql', // Default dialect
    },
    test: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'your_database_name',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: process.env.DB_DIALECT || 'mysql',
    },
    production: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'your_database_name',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: process.env.DB_DIALECT || 'mysql',
    }
};