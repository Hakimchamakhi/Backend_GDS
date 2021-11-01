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
  Fournisseure.findOne({
      where: {
        id: req.body.id
      }
    }).then(famille => {
      if (!famille) {
        return res.status(404).send({"success":0,"message":" famile n'existe pas "});
      }
        return res.status(401).send({"data":famille,"success":0,"message":"famile existe "});
      
  });
}


exports.update=(req,res)=>{
  Fournisseure.update(
  {
    cinMF: req.body.cinMF,
    raisonS: req.body.raisonS,
    email:req.body.email,
    telephone: parseInt(req.body.telephone),
    actif: req.body.actif,
    adresse: req.body.adresse,
    adminclient_id:req.body.adminclient_id,
    updated_at: Date.now(),
},
  {
    where: {id: req.params.id},
  },
  
)
.then(data => {
  res.send({status:"200",message:"updated"});
})
.catch((error) => {

  res.send(error)

});
}


exports.delete=(req,res)=>{
  Fournisseure.destroy(
    {
      where: {id: req.params.id},
    },
    
  )
  .then(data => {
    res.send({"data":data,"mesage":"delete seucces"});
  })
  .catch((error) => {
    console.error(error);
  });
}