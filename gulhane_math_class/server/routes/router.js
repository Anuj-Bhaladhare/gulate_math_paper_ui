const express = require("express");
const router = express.Router();

const {login, signup} = require("./../controllers/auth");
const {isAdmin, auth} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;