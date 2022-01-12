module.exports = function (sequelize, dataTypes){ 
    let alias = 'Producto'; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoincrement: true 
        }, 
        marca_id: { 
            type: dataTypes.INTEGER, 
            allowNull: false
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
        estado: { 
            type: dataTypes.STRING, 
        }, 
        categoria_id: {
            type: dataTypes.STRING
        },
        image_id: {
            type: dataTypes.STRING
        }
    }  
    let config = { 
        tableName: 'products', 
        timestamps: false 
    } 
    let Productos = sequelize.define(alias, cols, config) 
 
    Productos.associate = function(models) { 
        Productos.belongsToMany(models.Usuarios,{ 
            as: "usuarios", 
            through: "user_product", 
            foreignKey: "product_id", 
            otherKey:"user_id", 
            timestamps:false 
        }) 
        Productos.belongsTo(models.Marca,{ 
            as: "marca", 
            foreignKey: "marca_id",  
        }) 
        Productos.belongsTo(models.Category, { 
            as: "category", 
            foreignKey:"categoria_id" 
        }) 
        Productos.belongsTo(models.Image, {
            as: "image",
            foreignKey: "image_id"
        })
    } 
 
    return Productos;  
}