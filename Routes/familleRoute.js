const express = require('express');
const router = express.Router();
const faservice = require("../Services/Familleservice");

 
router.post('/create', faservice.create);
router.get('/getall', faservice.getall);
router.get('/getbyid/:id', faservice.getbyId);
router.put('/update/:id', faservice.update);
router.delete('/delete/:id', faservice.delte);

module.exports=router;
