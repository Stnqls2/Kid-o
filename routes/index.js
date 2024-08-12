const express = require("express");

const router = express.Router();

const pool = require("../db")

router.get ("/", (req, res) => {

    res.render("index.html");
});

router.post("/test", (req, res) => {
    const data = req.body;
    pool((conn) => {

        conn.query( 
            "insert into phone(name, phone, age) values(?, ?, ?) ",
            [data.name, data.phonenumber, data.age],
            (err, result) => {
                err  ? console.log(err)  : console.log({ result : true});

            }
        )
        conn.release();
    })
    res.render("test.ejs",
        { name : req.body.name, 
        age : req.body.age, 
        phone: req.body.phonenumber

    });
} )

router.get("/test", (req, res) => {
    pool((conn) => {
    
        conn.query('select * from phone', (err, result) => {
     if (!err){
        console.log(result)
        res.render("test/list.ejs", {result})
    } else {
        console.log(err)
     }        
    });
    conn.release();
})
 })

    


module.exports = router;
