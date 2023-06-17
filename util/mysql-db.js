const env = require('dotenv').config().parsed; //check .env file to configure DB connection
const param = require('dotenv').config({path: `.env.${env.ENV}`}).parsed;
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: param.DB_HOST,
    user: param.DB_USER,
    password: param.DB_PASSWORD,
    database: param.DB_SCHEMA
});

module.exports = pool.promise();