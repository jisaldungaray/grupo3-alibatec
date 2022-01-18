const db = require('../database/models');



const mainController = {
    index: (req,res) => {
        db.Producto.findAll()
            .then((product) =>{
                res.render('index', {product})
    })
    },
    servicios: (req, res ) => {
        res.render('service')
    },
}

module.exports = mainController;