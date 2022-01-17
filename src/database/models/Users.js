module.exports = function (sequelize, dataTypes){ 
    let alias = 'Usuarios'; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoincrement: true 
        }, 
        name: { 
            type: dataTypes.STRING, 
            allowNull: false 
        }, 
        last_name: { 
            type: dataTypes.STRING, 
            allowNull: false 
        }, 
        email: { 
            type: dataTypes.STRING, 
            allowNull: false
        }, 
        password: { 
            type: dataTypes.STRING, 
            allowNull: false
        }, 
        image: { 
            type: dataTypes.STRING 
        }, 
        categoriaUser_id: { 
            type: dataTypes.INTEGER 
        } 
    }  
    let config = { 
        tableName: 'users', 
        timestamps: false 
    } 
    let Usuarios = sequelize.define(alias, cols, config) 
 
    Usuarios.associate = function(models) { 
        Usuarios.belongsToMany(models.Producto,{ 
            as: "productos", 
            through: "user_product", 
            foreignKey: "user_id", 
            otherKey:"product_id", 
            timestamps:false 
        }) 
        Usuarios.belongsTo(models.CategoriaUsuario,{ 
            as:"categoriausuario", 
            foreignKey:"categoriaUser_id" 
        })    
    } 
 
    return Usuarios;  
}