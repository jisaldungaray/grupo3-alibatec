
const db = require('../database/models')

const dbController = {
    store: function(req, res) {
        db.Productos.create({
            ...req.body
        })
            .then((product) => {
                res.redirect('/productos', {product})
            })
    },
    create: function(req, res){
        db.Productos.findAll()
            .then((product) => {
                res.render('productAdd', {product})
            })
    },
    productList: function(req, res) {
         db.Productos.findAll({
    //         include: ['marcas', 'imageProduct']
        })
             .then((product) => {
                 res.render('productos', {product})
            })
    }, 
    edit: function(req, res) {
        let productos = db.Productos.findByPk(req.params.id)
        let marca = db.Marca.findAll()
        let image = db.ImageProducto.findByPk(req.paramas.id)

        Promise.all([productos, marca, image])
            .then(function(producto, marca, image){
                res.render('productEdit', {producto, marca, image})
            })
    },
    update: function(req, res) {
        db.Productos.update({
            name: req.body.name,
            model: req.body.model,
            detail: req.body.detail,
            image: req.file.imagen,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
        },
        {where: {id: req.params.id}})
            res.redirect('/detail' + req.params.id)
    },
    delete: function(req, res) {
        db.Productos.destroy({
            where: {id: req.params.id}
        })
            res.redirect('/productos')
    }
            

}
module.exports = dbController;