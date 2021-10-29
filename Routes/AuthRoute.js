const express = require('express');
const router = express.Router();
const AuthService = require("../Services/AuthService");

 
router.post('/create', AuthService.create);
router.post('/login', AuthService.login);

module.exports=router;
