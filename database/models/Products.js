module.exports = function (sequelize, dataTypes){
    let alias = 'Productos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true
        },
        model: {
            type: dataTypes.STRING,
            allowNull: true
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: true
        },
        discount: {
            type: dataTypes.DECIMAL
        },
        detail: {
            type: dataTypes.STRING,
            allowNull: true
        },
        image: {
            type: dataTypes.BLOB,
            allowNull: true
        },
        estado: {
            type: dataTypes.STRING,
        }
    } 
    let config = {
        tableName: 'products',
        timestamps: false
    }
    let Productos = sequelize.define(alias, cols, config)

    Productos.associate = function(models) {
        Productos.belongsToMany(models.Users,{
            as: "usuarios",
            through: "user_product",
            foreignKey: "product_id",
            otherKey:"user_id",
            timestamps:false
        })
        Productos.belongsToMany(models.Marcas,{
            as: "marcas",
            through: "marca_producto",
            foreignKey: "product_id",
            otherKey:"marca_id",
            timestamps:false
        })
        Productos.hasMany(models.Image-product, {
            as: "image-product",
            foreignKey: "image_product"
        })
        Productos.belongsTo(models.Category, {
            as: "category",
            foreignKey:"categoria_producto"
        })
        
    }

    return Productos; 
}