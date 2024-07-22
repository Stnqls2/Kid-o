const express = require("express");

const app = express();

app.set("port", 3000);

//*router 설정 */
const indexRouter = require("./routes/index");

const indexRou = require("./routes/jam");

/** router 연결 */
app.use("/index", indexRouter)

app.use ("/jam", indexRou)

app.get("/", (req, res) => {

    res.send("Hello World");
});

app.listen(app.get("port"), () => {
    console.log(`Server On Port ${app.get("port")}`);
});