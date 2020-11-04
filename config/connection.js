// set up MYSQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "happyface",
    database: "burgers_db"
});
//make connection
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
//export connection for ORM use
module.exports = connection;