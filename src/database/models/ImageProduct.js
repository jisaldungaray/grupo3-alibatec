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
        tableName: 'image_product', 
        timestamps: false 
    } 
    let Image = sequelize.define(alias, cols, config) 
     
    Image.associate = function(models) {  
        Image.belongsTo(models.Producto,{ 
            as: "product", 
            foreignkey: "image_id", 
        }) 
    } 
 
    return Image; 
}