const express = require("express");

const router = express.Router();

const bookService = require("../service/bookService")

router.get ("/", (req, res) => {

    res.render("book/bookInfo.html")
})

router.post("/", async (req, res) => {

    const data = req.body;
    const result = await bookService.bookinfo(data)

    if(result == true) { 

        res.render("book/success.ejs", {data});
    } else {

        res.send (result);
    }
} )

router.get("/list", async (req, res) => {

    let result = await bookService.list();
    
    res.send(result);
     
    
    });

module.exports = router