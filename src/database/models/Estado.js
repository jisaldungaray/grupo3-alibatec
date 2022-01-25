module.exports = function(sequelize, dataTypes){ 
    let alias = "Estado"; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        estado: { 
            type: dataTypes.STRING,
        } 
    } 
    let config = { 
        tableName: 'estado', 
        timestamps: false 
    } 
    let Estado = sequelize.define(alias, cols, config) 
 
    Estado.associate = function(models){ 
        Estado.hasMany(models.Producto,{ 
            as:"products", 
            foreignKey:"estado_id" 
        }) 
    } 
 
    return Estado; 
}