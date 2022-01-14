
const db = require('../database/models');
const { Op } = require("sequelize");

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
          //  console.log(product.image[0])
        })
        .catch (err => console.log (err))
    },
    create: function(req, res){
       db.Producto.findAll({
            include: [{association: "marca"}, {association: "category"}],
            attributes: ['estado'],
            group: 'estado',
        })
            .then((product) => {
            //    console.log(product[0].category.dataValues.category)
                res.render('productAdd', {product})
            })
    },   
    store: function(req, res) {
        db.Image.create({})// para guardar la imagen
        db.Producto.create({
            marca_id: req.body.marca,
            model: req.body.model,
            detail: req.body.detail,
            categoria_id: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
        })
            .then((product) => {
               res.redirect('/productos', {product})
        })
            .catch(err => console.log (err))
    },
    edit: function(req, res) {
        db.Producto.findByPk(req.params.id,{
            include: ["marca", "category", "image"]
        })
        .then((producto)=>{
            res.render('productEdit', {producto})
            console.log(producto)
        })
        .catch(err => console.log (err))
    /*    let producto = db.Producto.findByPk(req.params.id)
        let marca = db.Marca.findByPk(req.params.id)
        let image = db.Image.findByPk(req.params.id)
        let category = db.Category.findByPk(req.params.id)

        Promise.all([producto, marca, image, category])
            .then(function([producto, marca, image, category]){
                res.render('productEdit', {producto, marca, image, category})
                console.log(producto)
            })*/
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