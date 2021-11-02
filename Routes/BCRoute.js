const express = require('express');
const router = express.Router();
const BcService = require("../Services/BcService");

 
router.post('/create', BcService.create);
router.get('/getall', BcService.getall);



module.exports=router;
