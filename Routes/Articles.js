const express = require('express');
const router = express.Router();

const  Article = require('../Models/Article');

router.post('/', (req,res)=>{
    const {nom, unite, quantite, famille, pa, pv, marge, tva, actif} = req.body
    const article = new Article({
        nom, unite, quantite, famille, pa, pv, marge, tva, actif
    })
    article.save().then(data=>{res.json("L'article a été enregistré avec succés")}).catch(error=>{res.json("L'article n'a pas été enregistré!!!")})
    
});

router.get('/', (req,res)=>{
    Article.find().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

router.put('/', (req, res) => {
    Article.findById(req.body._id).then(data => {
        data.nom = req.body.nom;
        data.unite= req.body.unite
        data.quantite= req.body.quantite
        data.famille= req.body.famille
        data.pa= req.body.pa
        data.pv= req.body.pv
        data.marge= req.body.marge
        data.tva= req.body.tva
        data.actif = req.body.actif;
        console.log(data)
        data.save().then(data => { res.json(data) }).catch(error => { res.json(error) })
    }
    )
    .catch(error => { res.json(error) })
})

router.delete('/:_id', (req,res)=>{
    const {_id} =  req.params
    Article.deleteOne({_id}).then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

module.exports = router;