const express = require("express");

const router = express.Router();

const userService = require("../service/userService")

router.get("/", (req, res) => {

    res.render("user/register.html");
})

router.post("/", async (req, res) => {

    const data = req.body;
    console.log(data)
    const result = await userService.register(data)
    if ( result == true) {
        
        res.render("user/success.html")

    } else {

        res.send (err);
    }
})




module.exports = router;