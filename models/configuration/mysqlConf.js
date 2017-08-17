
var mysql = require('promise-mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Simplon1",
    database: "MARKET"
});

module.exports = connection;
