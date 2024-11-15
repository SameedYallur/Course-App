const express = require("express");
const router = express.Router();
const { User } = require('../models/user');
const {signup,login,verify}=require('../controllers/authController')
const auth=require('../middlewares/auth')


router.post("/signup", signup);
router.post("/login", login);
router.get("/verify",auth,verify)

module.exports = router;
