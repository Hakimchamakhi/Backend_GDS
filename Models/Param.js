const mongoose=require('mongoose');
//Create a params having this prototype:
const ParamSchema = mongoose.Schema({
    bcnum1:{
        type:String
    },
    bcnum2:{
        type:Number
    }
}); 

module.exports = mongoose.model('Params',ParamSchema);