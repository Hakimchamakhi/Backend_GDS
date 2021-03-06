const db = require("../models");
const Article = db.Article;
var models = require('../models');


// Create 
exports.create =(req, res) => {
          const article = {
            nom: req.body.nom,
            unite: req.body.unite,
            quantite: req.body.quantite,
            actif: req.body.actif,
            pa: req.body.pa,
            pv: req.body.pv,
            marge: req.body.marge,
            tva: req.body.tva,
            famille_id: req.body.famille_id,
            adminclient_id: req.body.adminclient_id,
            created_at: Date.now(),
            updated_at: Date.now(),
          };
          Article.create(article)
            .then(data => {
              res.send({"success":1,"message":"succes","data":data});
            })
            .catch(err => {
              res.status(500).send({"error":0,"message":err.message});
            });
    

}


// get all  
exports.getall =(req, res) => {
    Article.findAll({
      include: [{
        model: models.Famille,
        as: 'famille'
    }],
  order: [
    ['id', 'DESC']
  ]
  }).then(data => {
    if (!data) {
      return res.status(404).send({ reason: 'data Not Found.' });
    } 
  res.status(200).send({data });
});
};


// get by id  
exports.getbyId =(req, res) => {
    Article.findOne({
        where: {
          id: req.body.id
        }
      }).then(article => {
        if (!article) {
          return res.status(404).send({"success":0,"message":" article n'existe pas "});
        }
          return res.status(401).send({"data":article,"success":0,"message":"article existe "});
        
    });
}

// delete
exports.delte =(req, res) => {
  Article.destroy({
    where: {
       id: req.params.id
    }
 }).then(function(rowDeleted){
  if(rowDeleted === 1){
     res.json('Deleted successfully');
   }
  }, function(err){
    console.log(err); 
  });
};


// update
exports.update =(req, res) => {
  Article.update(
    {
      nom: req.body.nom,
            unite: req.body.unite,
            quantite: req.body.quantite,
            actif: req.body.actif,
            pa: req.body.pa,
            pv: req.body.pv,
            marge: req.body.marge,
            tva: req.body.tva,
            famille_id: req.body.famille_id,
            adminclient_id: req.body.adminclient_id,
            updated_at: Date.now(),
  },
    {
      where: {id: req.params.id},
    },
    
  )
  .then(data => {
    res.send({status:"200",message:"updated",data:data});

  })
  .catch((error) => {
    res.send(error)

  });
}