const db = require("../models");
const Famille = db.Famille;


// Create 
exports.create =(req, res) => {
    Famille.findOne({
      where: {
        codefam: req.body.codefam
      }
    }).then(famille => {
      if (famille) {
        return res.status(404).send({"succes":0,"message":"famille déja existant"});
      }
      else
         {
          const famille = {
            nom: req.body.nom,
            codefam: req.body.codefam,
            actif: req.body.actif,
            created_at: Date.now(),
            updated_at: Date.now(),
          };

          Famille.create(famille)
            .then(data => {
              res.send({"success":1,"message":"succes","data":data});
            })
            .catch(err => {
              res.status(500).send({"error":0,"message":err.message});
            });
    
      }
    })

};


// get all  
exports.getall =(req, res) => {
    Famille.findAll({
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
    Famille.findOne({
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

// delete
exports.delte =(req, res) => {
};


// update
exports.update =(req, res) => {
};