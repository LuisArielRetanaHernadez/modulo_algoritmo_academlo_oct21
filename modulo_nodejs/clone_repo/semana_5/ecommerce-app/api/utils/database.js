const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

// dotenv.config({ path: './config.env' });

const db = new Sequelize({
	dialect: 'postgres',
    host: process.env.BD_HOST,
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD,
    port: process.env.BD_PORT,
    logging: false,
});

module.exports = { db };
