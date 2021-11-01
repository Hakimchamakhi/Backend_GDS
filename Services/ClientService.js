const db = require("../models");
const Client = db.Client;


// Create 
exports.create =(req, res) => {
    Client.findOne({
        where: {
          cinMF: req.body.cinMF
        }
      }).then(user => {
        if (user) {
          return res.status(404).send({"succes":0,"message":"Client déja existant"});
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
            Client.create(user)
              .then(data => {
                res.send({"success":1,"message":"succes","data":data});
              })
              .catch(err => {
                res.status(500).send({"success":0,"message":err.message});
              });
      
        }
      })
  
}


// get all  
exports.getall =(req, res) => {
    Client.findAll({
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
    Client.findOne({
        where: {
            cinMF: req.parms.cinmf
        }
      }).then(Client => {
        if (!Client) {
          return res.status(404).send({"success":0,"message":" Client n'existe pas "});
        }
          return res.status(401).send({"data":Client,"success":0,"message":"Client existe "});
        
    });
}


exports.update=(req,res)=>{
  Client.update(
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
    Client.destroy(
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