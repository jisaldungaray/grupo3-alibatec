const db = require('../../database/models')

const controllerprueba = {
    products: (req, res) => {
        db.Productos.findAll()
            .then(productos)
                res.render('prueba', {productos:productos})
            
    }
}

module.exports = controllerprueba