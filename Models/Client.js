const mongoose=require('mongoose');
//Create a Client having this prototype:
const ClientSchema = mongoose.Schema({
    raisonS:{
        type:String, required:true, unique:true
    },
    tel:{
        type:String, required:true
    },
    email:{
        type:String, required:true
    },
    adresse:{
        type:String, required:true
    },
    actif:{
        type:Boolean , required:true, default:false
    },
    cinMF:{
        type:String , required:true, unique:true
    }
}); 

module.exports = mongoose.model('Clients',ClientSchema);