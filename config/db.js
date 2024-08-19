const mysql= require ('mysql2/promise.js')
const config = {
    "host" : "localhost",
    "port" : 3306,
    "user" : "root",
    "password" : "Sergo13529!@",
    "database" : "test",
    "connectionlimit" : 30,
}
const pool = mysql.createPool(config);

module.exports = pool;