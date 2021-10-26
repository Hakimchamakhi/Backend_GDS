const mongoose=require('mongoose');
//Create a Article having this prototype:
const ArticleSchema = mongoose.Schema({
    nom:{
        type:String, required:true, unique:true
    },
    unite:{
        type:String, required:true
    },
    quantite:{
        type:Number, required:true
    },
    famille:{
        type:String, required:true
    },
    actif:{
        type:Boolean , required:true, default:false
    },
    pa:{
        type:Number , required:true
    },
    pv:{
        type:Number , required:true
    },
    marge:{
        type:Number , required:true
    },
    tva:{
        type:Number, required:true
    }
}); 

module.exports = mongoose.model('Articles',ArticleSchema);