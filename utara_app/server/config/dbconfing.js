const mysql = require('mysql');

const connectDB = mysql.createConnection({
    host: 'localhost',
    user: 'sqluser',
    password: 'password',
    database: 'pixelworld',
  });

module.exports = connectDB;