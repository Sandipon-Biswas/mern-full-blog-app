const express =require('express');
const { getAlluser, signup, login } = require('../controlers/user.controler');

const router =express.Router();
router.get("/",getAlluser )
router.post("/signup",signup )
router.post("/login", login )

module.exports=router;