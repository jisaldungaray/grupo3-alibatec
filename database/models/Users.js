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
            allowNull: true
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: true
        },
        image: {
            type: dataTypes.BLOB
        },
        category: {
            type: dataTypes.INTEGER
        }
    } 
    let config = {
        tableName: 'users',
        timestamps: false
    }
    let Users = sequelize.define(alias, cols, config)

    Users.associate = function(models) {
        Users.belongsToMany(models.Products,{
            as: "productos",
            through: "user_product",
            foreignKey: "user_id",
            otherKey:"product_id",
            timestamps:false
        })
    }

    return Users; 
}