module.exports = function(sequelize, dataTypes){ 
    let alias = 'Marcas'; 
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
        Marcas.belongsToMany(models.Productos,{ 
            as: "products", 
            through: "marca_producto", 
            foreignKey: "marca_id", 
            otherKey:"product_id", 
            timestamps:false 
        }) 
    } 
 
    return Marcas; 
}