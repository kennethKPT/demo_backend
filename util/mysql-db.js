const env = require('dotenv').config().parsed;
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_SCHEMA
});

module.exports = pool.promise();