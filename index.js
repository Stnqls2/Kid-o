const express = require("express");

const app = express();

const engine = require("ejs")

app.engine("html", engine.renderFile)
app.set("veiw engine", "html")
app.set("views", __dirname + "/views")

const pool = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//server port설정 
app.set("port", 3000);

const controller = require("./controller");
app.use("/", controller );



app.listen(app.get("port"), () => {
    console.log(`Server On Port ${app.get("port")}`);
});