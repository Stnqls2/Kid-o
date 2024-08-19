const express = require("express");

const router = express.Router();

const phoneController = require("./phoneController")
const userController = require("./userController")
const bookController = require("./bookController")

router.use("/phone", phoneController)
router.use("/user", userController);
router.use("/book", bookController);


    


module.exports = router;
