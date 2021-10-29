'use strict'
const db = require("../models");

module.exports=(sequelize,DataTypes)=>{
const Article= sequelize.define("Article",{
    id:{type:DataTypes.INTEGER,primaryKey: true,allowNull: false, autoIncrement: true,},
    nom:{type:DataTypes.STRING,allowNull: false,required:true,unique: true},
    unite:{type:DataTypes.STRING,allowNull: false,required:true},
    quantite:{type:DataTypes.INTEGER,allowNull: false},
    actif:{type: DataTypes.BOOLEAN,allowNull: true,required:false},
    pa:{type: DataTypes.INTEGER,allowNull: true,required:false},
    pv:{type: DataTypes.INTEGER,allowNull: true,required:false},
    marge:{type: DataTypes.INTEGER,allowNull: true,required:false},
    tva:{type: DataTypes.INTEGER,allowNull: true,required:false},
} ,{});
Article.associate = function(models){
    Article.belongsTo(models.Famille, { as : 'famille', foreignKey: 'famille_id' });
    Article.belongsTo(models.AdminClient, { as : 'adminclient', foreignKey: 'adminclient_id' });
    Article.belongsToMany(models.BonCommande, {
        through: 'BcArticle',
        as: 'bonarticles',
        foreignKey: 'article_id',
        otherKey: 'bc_id'
      });
} 
return Article;
}

