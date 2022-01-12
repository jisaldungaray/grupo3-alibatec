
const db = require('../database/models')

const dbController = {
    store: function(req, res) {
        db.Productos.create({
            name: req.body.name,
            model: req.body.model,
            detail: req.body.detail,
            image: req.file.imagen,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
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
    detalle: (req, res ) => {
        db.Productos.findByPk(req.params.id, {
            include: ["marcas"]
        })
        .then(product => {
            res.render('productDetail', {product})
        })
    },
    productList: function(req, res) {
        db.Producto.findAll({
            include: ["marca"]
        })
             .then((product) => {
                 res.render('productos', {product})
            })
            .catch (err=> console.log (err))
    }, 
    edit: function(req, res) {
        let productos = db.Producto.findByPk(req.params.id)
        let marca = db.Marca.findAll()
        let image = db.Image.findByPk(req.paramas.id)

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