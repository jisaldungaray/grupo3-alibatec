module.exports = function(sequelize, dataTypes){ 
    let alias = 'Marca'; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
        tipo: { 
            type: dataTypes.STRING, 
            allowNull: true 
        } 
    } 
    let config = { 
        tableName: 'marcas', 
        timestamps: false 
    } 
    let Marcas = sequelize.define(alias, cols, config) 
     
    Marcas.associate = function(models) {  
        Marcas.hasMany(models.Producto,{ 
            as: "products", 
            foreignKey: "marca_id", 
        }) 
    } 
 
    return Marcas; 
}