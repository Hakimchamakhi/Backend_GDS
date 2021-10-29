'use strict'

const db = require("../models");

module.exports=(sequelize,DataTypes)=>{
const Famille= sequelize.define("Famille",{
    id:{type:DataTypes.INTEGER,primaryKey: true,allowNull: false, autoIncrement: true,},
    nom:{type:DataTypes.STRING,allowNull: false,required:true, unique: true},
    codefam:{type:DataTypes.STRING,allowNull: false,required:true, unique: true},
    actif:{type:DataTypes.BOOLEAN,allowNull: false},
} ,{});

Famille.associate = function(models){
    Famille.hasMany(models.Article, {as: 'articles', foreignKey: 'famille_id'})

  } 
  return Famille;
}

