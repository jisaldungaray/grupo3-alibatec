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
        categoria: { 
            type: dataTypes.STRING 
        } 
    }  
    let config = { 
        tableName: 'users', 
        timestamps: false 
    } 
    let Users = sequelize.define(alias, cols, config) 
 
    Users.associate = function(models) { 
        Users.belongsToMany(models.Producto,{ 
            as: "productos", 
            through: "user_product", 
            foreignKey: "user_id", 
            otherKey:"product_id", 
            timestamps:false 
        }) 
    } 
 
    return Users;  
}