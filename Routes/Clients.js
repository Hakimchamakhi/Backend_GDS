const express = require('express');
const router = express.Router();

const  Client = require('../Models/Client');

router.post('/', (req,res)=>{
    const {raisonS,tel,email,adresse,cinMF, actif} = req.body
    const client = new Client({
        raisonS,tel,email,adresse,cinMF, actif
    })
    client.save().then(data=>{res.json("Le client a été enregistré avec succés")}).catch(error=>{res.json("Le client n'a pas été enregistré!!!")})
    
});

router.get('/', (req,res)=>{
    Client.find().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

router.put('/', (req, res) => {
    Client.findById(req.body._id).then(data => {
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
    Client.deleteOne({_id}).then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

module.exports = router;