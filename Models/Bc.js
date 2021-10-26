const mongoose=require('mongoose');
//Create a Bon Comande having this prototype:
const BcSchema = mongoose.Schema({
    nbc:{
        type:String, required:true, unique:true
    },
    client:{
        type:String, required:true
    },
    statut:{
        type:String, default:'NR'
    },
    prix:{
        type:Number, required:true
    },
    articles:{
        type:Array
    },
    date:{
        type:Date, default:Date.now()
    }
}); 

module.exports = mongoose.model('Bcs',BcSchema);