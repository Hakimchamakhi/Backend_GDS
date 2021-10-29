const db = require("../models");
const Adminclient = db.AdminClient;
var bcryptjs = require('bcryptjs');
var jwt=require('jsonwebtoken')


// Create and Save a new Adminclient
exports.create =(req, res) => {
    Adminclient.findOne({
      where: {
        email: req.body.email}
    }).then(user => {
      if (user) {
        return res.status(404).send({"succes":0,"message":"email déja existant"});
      }
      else
         {
          const user = {
            email: req.body.email,
            username: req.body.username,
            telephone: parseInt(req.body.telephone),
            password: req.body.password = bcryptjs.hashSync(req.body.password, 8),
            created_at: Date.now(),
            updated_at: Date.now(),
          };
          console.log(user);
          Adminclient.create(user)
            .then(data => {
              res.send({"success":1,"message":"succes","data":data});
            })
            .catch(err => {
              res.status(500).send({"success":0,"message":err.message});
            });
    
      }
    })

};

exports.login =(req, res) => {
    Adminclient.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (!user) {
          return res.status(404).send({"success":0,"message":"Email ou mots de pase invalide"});
        }
     
        var passwordIsValid = bcryptjs.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
          return res.status(401).send({"success":0,"message":"Email ou mots de pase invalide"});
        }
   
      var token = jwt.sign({ id: user.id },"User", {
        
        expiresIn: 86400 // expires in 24 hours
      });
   
      // get other user information
      res.status(200).send({
       "success":1,
        auth: true,
        accessToken: token,
        email: user.email,
        user:user
      });
    });

};

