'use strict'
const db = require("../models");


module.exports=(sequelize,DataTypes)=>{
const AdminClient= sequelize.define("AdminClient",{
    id:{type:DataTypes.INTEGER,primaryKey: true,allowNull: false, autoIncrement: true,},
    email:{type:DataTypes.STRING,allowNull: false,required:true,isEmail:true},
    telephone:{type:DataTypes.INTEGER,allowNull: false,required:true},
    username:{type:DataTypes.STRING,allowNull: false},
    password:{type: DataTypes.STRING,allowNull: true,required:false},
} ,{});
AdminClient.associate = function(models){
  AdminClient.hasMany(models.Fournisseur, {as: 'fournisseure', foreignKey: 'adminclient_id'})
  AdminClient.hasMany(models.Client, {as: 'clients', foreignKey: 'adminclient_id'})
  AdminClient.hasMany(models.Article, {as: 'article', foreignKey: 'adminclient_id'})

} 
return AdminClient;
}