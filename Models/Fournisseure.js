'use strict'

const db = require("../models");
const AdminClient = db.AdminClient;

module.exports=(sequelize,DataTypes)=>{
const Fournisseur= sequelize.define("Fournisseur",{
    id:{type:DataTypes.INTEGER,primaryKey: true,allowNull: false, autoIncrement: true,},
    cinMF:{type:DataTypes.STRING,allowNull: false,required:true, unique: true},
    raisonS:{type:DataTypes.STRING,allowNull: false,required:true, unique: true},
    telephone:{type:DataTypes.INTEGER,allowNull: false,required:true},
    actif:{type:DataTypes.BOOLEAN,allowNull: false},
    adresse:{type:DataTypes.STRING,allowNull: false},
    email:{type:DataTypes.STRING,allowNull: false,isEmail:true},

} ,{});

Fournisseur.associate = function(models){
    Fournisseur.belongsTo(models.AdminClient, { as : 'fournisseure', foreignKey: 'adminclient_id' });

  } 
  return Fournisseur;
}
