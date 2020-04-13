const mysql = require('mysql');

const connectionPool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dell",
    database: "pradhama_hospital"
});

module.exports = connectionPool;