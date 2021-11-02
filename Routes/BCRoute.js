const express = require('express');
const router = express.Router();
const BcService = require("../Services/BcService");

 
router.post('/create', BcService.create);
router.get('/getall', BcService.getall);
router.delete('/delete/:id', BcService.delete);
router.get('/get/:gid', BcService.get);


module.exports=router;
