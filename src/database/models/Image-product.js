module.exports = function(sequelize, dataTypes){ 
    let alias = 'ImageProducto'; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        image: { 
            type: dataTypes.INTEGER, 
            allowNull: true 
        } 
    } 
    let config = { 
        tableName: 'image_product', 
        timestamps: false 
    } 
    let ImageProduct = sequelize.define(alias, cols, config); 
     
    ImageProduct.associate = function(models){ 
        ImageProduct.hasMany(models.Productos, { 
            as: "imageProduct", 
            foreignKey: "image_product" 
        }) 
 
    } 
    return ImageProduct 
}