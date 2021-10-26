const express = require('express');
const router = express.Router();

const  Fournisseur = require('../Models/Fournisseur');

router.post('/', (req,res)=>{
    const {raisonS,tel,email,adresse,cinMF,actif} = req.body
    const fournisseur = new Fournisseur({
        raisonS,tel,email,adresse,cinMF, actif
    })
    fournisseur.save().then(data=>{res.json("Le fournisseur a été enregistré avec succés")}).catch(error=>{res.json("Le fournisseur n'a pas été enregistré!!!")})
    
});

router.put('/', (req, res) => {
    Fournisseur.findById(req.body._id).then(data => {
        data.raisonS= req.body.raisonS
        data.tel= req.body.tel
        data.email= req.body.email
        data.adresse= req.body.adresse
        data.cinMF= req.body.cinMF
        data.actif = req.body.actif;
        data.save().then(data => { res.json(data) }).catch(error => { res.json(error) })
    }
    )
    .catch(error => { res.json(error) })
})

router.delete('/:_id', (req,res)=>{
    const {_id} =  req.params
    Fournisseur.deleteOne({_id}).then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

router.get('/', (req,res)=>{
    Fournisseur.find().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

module.exports = router;