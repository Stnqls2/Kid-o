const mysql= require ('mysql2')
const config = {
    "host" : "localhost",
    "port" : 3306,
    "user" : "root",
    "password" : "Sergo13529!@",
    "database" : "test",
    //"connectionlimit" : 30

}
const pool = mysql.createPool(config);

// pool.getConnection((err, conn) => {

//     if (!err) {
//         console.log("database connected");
//     } else {
//         console.log (err);
//     }

//     conn.release();
// })



module.exports = (callback) => {
    pool.getConnection ((err, conn) => {
        if (!err) {
            callback(conn);

        } else {
            console.log(err);
        }

    });
};

