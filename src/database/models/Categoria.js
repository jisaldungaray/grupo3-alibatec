module.exports = function(sequelize, dataTypes){ 
    let alias = "Category"; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        category: { 
            type: dataTypes.STRING, 
            allowNull: true 
        } 
    } 
    let config = { 
        tableName: 'categoria', 
        timestamps: false 
    } 
    let Category = sequelize.define(alias, cols, config) 
 
    Category.associate = function(models){ 
        Category.hasMany(models.Producto,{ 
            as:"products", 
            foreignKey:"categoria_id" 
        }) 
    } 
 
    return Category; 
}