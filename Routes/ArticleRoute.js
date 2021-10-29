const express = require('express');
const router = express.Router();
const ArticleService = require("../Services/ArticleService");

 
router.post('/create', ArticleService.create);
router.get('/getall', ArticleService.getall);
router.get('/getbyid/:id', ArticleService.getbyId);
router.put('/update/:id', ArticleService.update);
router.delete('/delete/:id', ArticleService.delte);

module.exports=router;
