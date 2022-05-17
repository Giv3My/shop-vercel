const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  dialectModule: mysql2
});

module.exports = sequelize;