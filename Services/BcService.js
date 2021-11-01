const db = require("../models");
const BonCommande = db.BonCommande;
const bcAR = db.BcArticle;


// Create 
exports.create =(req, res) => {
    const bc = {
        nbc: req.body.nbc,
        tvaTotal:req.body.tvaTotal,
        prixHt:req.body.prixHt,
        remise:req.body.remise,
        prixTtc:req.body.prixTtc,
        created_at: Date.now(),
        updated_at: Date.now(),
        client_id:req.body.client_id
    };

  
    BonCommande.create(bc)
      .then(data => {
        var arr=[];
        req.body.articles.forEach(element =>{ 
          var bcar = {
            bc_id: data.id,
            article_id:element.article,
            prixv:element.prix,
            qt:element.quantite,
            remise:element.remise,
            tva:element.tva,
           created_at: Date.now(),
           updated_at: Date.now(),
           
         };
       arr.push(bcar);
      })      
      bcAR.bulkCreate(arr).then(function() {
      res.send({"succes":1,"message":"ok"});
    }).then(function(users) {
      console.log(users) 
    })
      })
      .catch(err => {
        res.status(500).send({"succes":0,"message":err.message});
      });
  
}
