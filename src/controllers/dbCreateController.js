
const db = require('../database/models');
const { Op } = require("sequelize");

const dbController = {
    productList: function(req, res) {
        let producto = db.Producto.findAll()
        let marcas = db.Marca.findAll()

        Promise.all([producto, marcas])
            .then(function([product, marca]){
                res.render('productos', {product, marca})
              //  console.log(product)
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
            include: [{association: "marca"}]
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
       /* let image = db.Image.create({
            url: "/img/productos/"  + req.file.filename 
        })*/
        db.Producto.create({
            marca_id: req.body.marca,
            model: req.body.model,
            detail: req.body.detail,
            categoria_id: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
            estado_id: req.body.estado,
            image: "/img/productos/"  + req.file.filename
        })
            .then(() => {
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
        let categorys = db.Category.findAll()

        Promise.all([producto, marcas, categorys])
            .then(function([producto, marca, category]){
                res.render('productEdit', {producto, marca, category})
            })
            .catch(err => console.log (err))
    },
    update: function(req, res) {
        db.Producto.update({
            marca_id: req.body.marca,
            model: req.body.model,
            detail: req.body.detail,
            price: req.body.price,
            discount: req.body.discount,
            categoria_id: req.body.category,
            image: "/img/productos/"  + req.file.filename
        }, {
            where: {id: req.params.id}
        })
    /*    let image = db.Image.update({
        url: "/img/productos/"  + req.file.filename 
        }, {
            where: {id: req.params.id}
        })*/
            .then (() =>{
                res.redirect('/productos')
            })
            .catch (err => console.log (err))
    },
    delete: function(req, res) {
        db.Producto.destroy({
            where: {id: req.params.id}
        })
            res.redirect('/productos')
    }
            

}
module.exports = dbController;