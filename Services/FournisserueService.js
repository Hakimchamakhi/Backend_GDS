const db = require("../models");
const Fournisseure = db.Fournisseur;


// Create 
exports.create =(req, res) => {
    Fournisseure.findOne({
      where: {
        cinMF: req.body.cinMF
      }
    }).then(user => {
      if (user) {
        return res.status(404).send({"succes":0,"message":"Fournisseure déja existant"});
      }
      else
         {
          const user = {
            cinMF: req.body.cinMF,
            raisonS: req.body.raisonS,
            email:req.body.email,
            telephone: parseInt(req.body.telephone),
            actif: req.body.actif,
            adresse: req.body.adresse,
            adminclient_id:req.body.adminclient_id,
            created_at: Date.now(),
            updated_at: Date.now(),
          };
          Fournisseure.create(user)
            .then(data => {
              res.send({"success":1,"message":"succes","data":data});
            })
            .catch(err => {
              res.status(500).send({"success":0,"message":err.message});
            });
    
      }
    })

};


// get all  
exports.getall =(req, res) => {
  console.log(req.params.id)
  Fournisseure.findAll({
    where: {
      adminclient_id: req.params.id
    },
  order: [
    ['id', 'DESC']
  ]
  }).then(data => {
    if (!data) {
      return res.status(404).send({ reason: 'data Not Found.' });
    } 
  console.log(data);
  res.status(200).send({data });
});
};


// get by id  
exports.getbyId =(req, res) => {
};

// get by Cinf
exports.getByCinf =(req, res) => {
};

// delete
exports.delte =(req, res) => {
};


// update
exports.update =(req, res) => {
};