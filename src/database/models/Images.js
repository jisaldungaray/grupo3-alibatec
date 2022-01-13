module.exports = function(sequelize, dataTypes){ 
    let alias = 'Image'; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        url: { 
            type: dataTypes.STRING, 
        }
    } 
    let config = { 
        tableName: 'images', 
        timestamps: false 
    } 
    let Image = sequelize.define(alias, cols, config) 
     
    Image.associate = function(models) {  
        Image.belongsToMany(models.Producto,{ 
            as: "product", 
            through: "image_product",
            foreignkey: "image_id", 
            otherKey: "product_id",
            timestamps: false
        }) 
    } 
 
    return Image; 
}