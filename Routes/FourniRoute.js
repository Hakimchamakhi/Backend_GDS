const express = require('express');
const router = express.Router();
const fourniservice = require("../Services/FournisserueService");

 
router.post('/create', fourniservice.create);
router.get('/getall/:id', fourniservice.getall);
router.get('/getbyid/:id', fourniservice.getbyId);
router.put('/update/:id', fourniservice.update);
router.delete('/delete/:id', fourniservice.delete);

module.exports=router;
