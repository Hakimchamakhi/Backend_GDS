const express = require('express');
const router = express.Router();

const Famille = require('../Models/Famille');

router.post('/', (req, res) => {
    const { nom, codefam, actif } = req.body
    const famille = new Famille({
        nom, codefam, actif
    })
    famille.save().then(data => { res.json({ msg: "La famille d'article a été enregistré avec succés", data }) }).catch(error => { res.json("La famille d'article n'a pas été enregistré!!!") })

});

router.get('/', (req, res) => {
    Famille.find().then(data => { res.json(data) }).catch(error => { res.json(error) })
})
router.put('/', (req, res) => {
    Famille.findById(req.body._id).then(data => {
        data.nom = req.body.nom;
        data.codefam = req.body.codefam;
        data.actif = req.body.actif;
        data.save().then(data => { res.json(data) }).catch(error => { res.json(error) })
    }
    )
    .catch(error => { res.json(error) })
})

router.delete('/:_id', (req, res) => {
    const { _id } = req.params
    Famille.deleteOne({ _id }).then(data => { res.json(data) }).catch(error => { res.json(error) })
})

module.exports = router;