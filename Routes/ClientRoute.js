const express = require('express');
const router = express.Router();
const ClientService = require("../Services/ClientService");

 
router.post('/create', ClientService.create);
router.get('/getall', ClientService.getall);
router.get('/getbyid/:cinmf', ClientService.getbyId);
router.delete('/delete/:id', ClientService.delete);
router.put('/update/:id', ClientService.update);


module.exports=router;
