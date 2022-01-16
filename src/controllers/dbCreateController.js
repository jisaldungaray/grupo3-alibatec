
const db = require('../database/models');
const { Op } = require("sequelize");

const dbController = {
    productList: function(req, res) {
        let producto = db.Producto.findAll()
        let marcas = db.Marca.findAll()
        let image = db.Image.findAll()

        Promise.all([producto, marcas, image])
            .then(function([product, marca, image]){
                res.render('productos', {product, marca, image})
             //   console.log(marca[0])
            })
       /* db.Producto.findAll({
            include: ["marca","image"]
        })
        .then((product) => {
            res.render('productos', {product})
            console.log (product)
            })
            .catch (err=> console.log (err))*/
    },
    detalle: (req, res ) => {
        let id = req.params.id
        db.Producto.findByPk(id, {
            include: [{association: "marca"}, {association: "image"}]
        })
        .then(product => {
            res.render('productDetail', { product })
        //    console.log(product.image)
        })
        .catch (err => console.log (err))
    },
    create: function(req, res){
        let producto = db.Producto.findAll()
        let marcas = db.Marca.findAll()
        let categorys = db.Category.findAll()
        let estado = db.Estado.findAll()

        Promise.all([producto, marcas, categorys, estado])
        .then(function([product, marca, category, estado]){
            res.render('productadd', {product, marca, category, estado})
        })
    /*   db.Producto.findAll({
            include: ["marca","category", "estado"],
            
        })
            .then((product) => {
                console.log(product[0].estado)
                res.render('productAdd', {product})
            })*/
    },   
    store: function(req, res) {
        // para guardar la imagen
        let producto = db.Producto.create({
            marca_id: req.body.marca,
            model: req.body.model,
            detail: req.body.detail,
            categoria_id: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
            estado_id: req.body.estado
        })
        let image = db.Image.create({
            url: "/img/productos/"  + req.file.filename 
        })
        Promise.all([producto, image])
            .then(([product, image]) => {
               res.redirect('/productos')
            })
            .catch(err => console.log (err))
    },
    edit: function(req, res) {
    /*    db.Producto.findByPk(req.params.id,{
            include: ["marca", "category", "image"]
        })
        .then((producto)=>{
            res.render('productEdit', {producto})
            console.log(producto)
        })
        .catch(err => console.log (err))*/
        let producto = db.Producto.findByPk(req.params.id)
        let marcas = db.Marca.findAll()
        let image = db.Image.findByPk(req.params.id)
        let categorys = db.Category.findAll()

        Promise.all([producto, marcas, image, categorys])
            .then(function([producto, marca, image, category]){
                res.render('productEdit', {producto, marca, image, category})
            })
            .catch(err => console.log (err))
    },
    update: function(req, res) {
        let producto = db.Producto.update({
            marca_id: req.body.marca,
            model: req.body.model,
            detail: req.body.detail,
            categoria_id: req.body.category,
            price: req.body.price,
            discount: req.body.discount
        }, {
            where: {id: req.params.id}
        })
        let image = db.Image.update({
            url: "/img/productos/"  + req.file.filename 
        }, {
            where: {id: req.params.id}
        })
        Promise.all([producto, image])
            .then (() =>{
                res.redirect('/productos')
            })
    },
    delete: function(req, res) {
        db.Producto.destroy({
            where: {id: req.params.id}
        })
            res.redirect('/productos')
    }
            

}
module.exports = dbController;