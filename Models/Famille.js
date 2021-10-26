const mongoose=require('mongoose');
//Create a Famille having this prototype:
const FamilleSchema = mongoose.Schema({
    nom:{
        type:String, required:true, unique:true
    },
    codefam:{
        type:String, required:true, unique:true
    },
    actif:{
        type:Boolean , required:true, default:false
    }
}); 

module.exports = mongoose.model('Familles',FamilleSchema);