const mysql = require('mysql');

const connectionPool = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "dell",
    database: "ppmss"
});

module.exports = connectionPool;