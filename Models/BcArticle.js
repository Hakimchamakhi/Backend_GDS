'use strict'
const db = require("../models");

module.exports=(sequelize,DataTypes)=>{
const BcArticle= sequelize.define("BcArticle",{
    id:{type:DataTypes.INTEGER,primaryKey: true,allowNull: false, autoIncrement: true,},
    tva:{type:DataTypes.INTEGER,allowNull: false,required:true},
    qt:{type:DataTypes.INTEGER,allowNull: false,required:true},
    prixv:{type:DataTypes.FLOAT,allowNull: false,required:true},
    remise:{type:DataTypes.FLOAT,allowNull: false,required:true},
} ,{});

return BcArticle;
}

