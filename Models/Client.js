'use strict'

const db = require("../models");
const AdminClient = db.AdminClient;

module.exports=(sequelize,DataTypes)=>{
const Client= sequelize.define("Client",{
    id:{type:DataTypes.INTEGER,primaryKey: true,allowNull: false, autoIncrement: true,},
    cinMF:{type:DataTypes.STRING,allowNull: false,required:true, unique: true},
    email:{type:DataTypes.STRING,allowNull: false,required:true, unique: true, isEmail:true},
    raisonS:{type:DataTypes.STRING,allowNull: false,required:true, unique: true},
    telephone:{type:DataTypes.INTEGER,allowNull: false,required:true},
    actif:{type:DataTypes.BOOLEAN,allowNull: false},
    adresse:{type:DataTypes.STRING,allowNull: false},
} ,{});

Client.associate = function(models){
    Client.belongsTo(models.AdminClient, { as : 'fournisseure', foreignKey: 'adminclient_id' });
    Client.hasMany(models.BonCommande, {as: 'boncommandes', foreignKey: 'client_id'})

  } 
  return Client;
}

