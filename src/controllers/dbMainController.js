const db = require('../database/models');

const mainController = {
    index: (req,res) => {
        db.Producto.findAll({
            include : ["estado"]
        })
            .then((product) =>{
                res.render('index', {product})
                console.log (product[0])
    })
    },
    servicios: (req, res ) => {
        res.render('service')
    },
}

module.exports = mainController;