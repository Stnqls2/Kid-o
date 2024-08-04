const express = require("express");

const app = express();
//*router 설정 */
const indexRouter = require("./routes");

const engine = require("ejs")

app.engine("html", engine.renderFile)
app.set("veiw engine", "html")
app.set("views", __dirname + "/views")

//sql접속
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

//     if(!err) {
//         conn.query("insert into phone values(?, ?, ?)", 
//             ['최범규', '01022222222', 24],
//             (err, result) => {
//             console.log(result);
//             if (err) console.log(err)
//                 else console.log(true)

//         });
//     }
//     else {
//         console.log(err)
//     }

//     conn.release();

// })
//server port설정 
app.set("port", 3000);



//const indexRou = require("./routes/jam");

/** router 연결 */
app.use("/index", indexRouter)



app.get("/", (req, res) => {

    res.render('index')
});

app.listen(app.get("port"), () => {
    console.log(`Server On Port ${app.get("port")}`);
});