const express = require("express");

const app = express();
//*router 설정 */
const indexRouter = require("./routes");

const engine = require("ejs")

app.engine("html", engine.renderFile)
app.set("veiw engine", "html")
app.set("views", __dirname + "/views")

const pool = require("./db");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//server port설정 
app.set("port", 3000);



/** router 연결 */
app.use("/index", indexRouter)



app.get("/", (req, res) => {

    res.render('index')
});

router.get("/test", (req, res) =>{
    console.log(req.query);
    res.send("test");

})

app.listen(app.get("port"), () => {
    console.log(`Server On Port ${app.get("port")}`);
});