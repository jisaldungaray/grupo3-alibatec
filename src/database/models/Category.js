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
        tableName: 'categoria_producto', 
        timestamps: false 
    } 
    let Category = sequelize.define(alias, cols, config) 
 
    Category.associate = function(models){ 
        Category.hasMany(models.Productos,{ 
            as:"products", 
            foreignKey:"categoria_producto" 
        }) 
    } 
 
    return Category; 
}