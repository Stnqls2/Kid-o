const express = require("express");

const engine = require("ejs")

const router = express.Router();


router.get ("/", (req, res) => {

    res.render("test.html")
});

module.exports = router;
