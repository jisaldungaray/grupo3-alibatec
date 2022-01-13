
const db = require('../database/models')

const dbController = {
    productList: function(req, res) {
        db.Producto.findAll({
            include: ["marca","image"]
        })
        .then((product) => {
            res.render('productos', {product})
            console.log (product[0].marca)
            })
            .catch (err=> console.log (err))
            
    },
    detalle: (req, res ) => {
        let id = req.params.id
        db.Producto.findByPk(id, {
            include: [{association: "marca"}, {association: "image"}]
        })
        .then(product => {
            res.render('productDetail', { product })
        })
        .catch (err => console.log (err))
    },
    create: function(req, res){
        /*    db.Producto.findAll({
                include: [{association: "marca"}, {association: "category"}]
            })
                .then((product) => {
                    res.render('productAdd', {product})
                })*/
            db.Category.findAll()
                .then((category) => {
                    res.render('productAdd', {category})
               })
    
    },   
    store: function(req, res) {
        db.Producto.create({
            name: req.body.name,
            model: req.body.model,
            detail: req.body.detail,
            image: req.file.filename,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
        })
            .then((product) => {
                res.redirect('/productos', {product})
            })
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
        db.Producto.update({
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
        db.Producto.destroy({
            where: {id: req.params.id}
        })
            res.redirect('/productos')
    }
            

}
module.exports = dbController;