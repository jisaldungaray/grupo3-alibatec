module.exports = function(sequelize, dataTypes){
    let alias = 'Image-product';
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
    let imageProduct = sequelize.define(alias, cols, config);
    
    imageProduct.associate = function(models){
        imageProduct.hasMany(models.products, {
            as: "image-product",
            foreignKey: "image_product"
        })

    }
    return imageProduct
}
