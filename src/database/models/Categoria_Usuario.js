module.exports = function(sequelize, dataTypes){ 
    let alias = "CategoriaUsuario"; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        categoria: { 
            type: dataTypes.STRING, 
            allowNull: true 
        } 
    } 
    let config = { 
        tableName: 'categoria_usuario', 
        timestamps: false 
    } 
    let CategoriaUsuario = sequelize.define(alias, cols, config) 
 
    CategoriaUsuario.associate = function(models){ 
        CategoriaUsuario.hasMany(models.Usuarios,{ 
            as:"usuarios", 
            foreignKey:"categoriaUser_id" 
        }) 
    } 
 
    return CategoriaUsuario; 
}