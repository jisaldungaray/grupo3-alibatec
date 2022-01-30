module.exports = function(sequelize, dataTypes){ 
    let alias = "Service"; 
    let cols = { 
        id: { 
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        nombre: { 
            type: dataTypes.STRING, 
            allowNull: true 
        },
        email: {
            type: dataTypes.STRING, 
            allowNull: true 
        },
        comentario: {
            type: dataTypes.STRING, 
            allowNull: true  
        }
    } 
    let config = { 
        tableName: 'service', 
        timestamps: false 
    } 
    let Service = sequelize.define(alias, cols, config) 
 
    return Service; 
}