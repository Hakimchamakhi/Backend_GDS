const express = require('express');
const router = express.Router();

const  Bc = require('../Models/Bc');
const  Client = require('../Models/Client');

router.post('/', (req,res)=>{
    const {nbc, client, statut, prix} = req.body
    const bc = new Bc({
        nbc, client, statut, prix
    })
    console.log(bc)
    bc.save().then(data=>{res.json("Bon de commande a été enregistré avec succés")}).catch(error=>{res.json("Bon de commande n'a pas été enregistré!!!")})
    
});

router.get('/', (req,res)=>{
    Bc.find().then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

router.put('/', (req, res) => {
    Bc.findById(req.body._id).then(data => {
        data.nbc = req.body.nbc;
        data.client= req.body.client
        data.statut= req.body.statut
        data.prix= req.body.prix
        data.save().then(data => { res.json(data) }).catch(error => { res.json(error) })
    }
    )
    .catch(error => { res.json(error) })
})

router.delete('/:_id', (req,res)=>{
    const {_id} =  req.params
    Bc.deleteOne({_id}).then(data=>{res.json(data)}).catch(error=>{res.json(error)})
})

module.exports = router;