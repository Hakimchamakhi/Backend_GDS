'use strict'
const db = require("../models");

module.exports=(sequelize,DataTypes)=>{
const BonCommande= sequelize.define("BonCommande",{
    id:{type:DataTypes.INTEGER,primaryKey: true,allowNull: false, autoIncrement: true,},
    nbc:{type:DataTypes.STRING,allowNull: false,required:true,unique: true},
    statut:{type:DataTypes.STRING,allowNull: false,required:true,defaultValue:"NR"},
    tvaTotal:{type:DataTypes.FLOAT,allowNull: false,required:true},
    prixHt:{type:DataTypes.FLOAT,allowNull: false,required:true},
    remise:{type:DataTypes.FLOAT,allowNull: false,required:true},
    prixTtc:{type:DataTypes.INTEGER,allowNull: false},
} ,{});
BonCommande.associate = function(models){
    BonCommande.belongsTo(models.Client, { as : 'client', foreignKey: 'client_id' });
    BonCommande.belongsToMany(models.Article, {
        through: 'BcArticle',
        as: 'article',
        foreignKey: 'bc_id',
        otherKey: 'article_id'
      });

} 
return BonCommande;
}
