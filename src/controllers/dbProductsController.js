const db = require('../database/models');
const { validationResult } = require('express-validator');
const { Op } = require("sequelize");

const dbController = {
    productList: function(req, res) {
        let producto = db.Producto.findAll()
        let marcas = db.Marca.findAll()

        Promise.all([producto, marcas])
            .then(function([product, marca]){
                res.render('productos', {product, marca})
            })
    },
    detalle: (req, res ) => {
        let id = req.params.id
        db.Producto.findByPk(id, {
            include: [{association: "marca"}]
        })
        .then(product => {
            res.render('productDetail', { product })
            console.log(product)
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
            res.render('productAdd', {product, marca, category, estado})
        })
    },   
    store: function(req, res) {
        let resultValidation = validationResult(req);
        let marcas = db.Marca.findAll()
        let categorys = db.Category.findAll()
        let estado = db.Estado.findAll()

        if(resultValidation.errors.length > 0){
            Promise.all([resultValidation, marcas, categorys, estado])
            .then(function([resultValidation, marca, category, estado]){
                return res.render('productAdd', {
                     marca, category, estado,
                     errors: resultValidation.mapped(),
                 });
            })
            } else{
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
            }
            
    },
    edit: function(req, res) {
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
        let resultValidation = validationResult(req);
        let marcas = db.Marca.findAll()
        let categorys = db.Category.findAll()
        let producto = db.Producto.findByPk(req.params.id)

        if(resultValidation.errors.length > 0){
            Promise.all([resultValidation, marcas, categorys, producto])
            .then(function([resultValidation, marca, category, producto]){
                return res.render('productEdit', {
                     marca, category, producto,
                     errors: resultValidation.mapped(),
                     old: req.body,
                 });
            })
        } else{
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
            .then (() => {
                res.redirect('/productos')
            })
            .catch (err => console.log (err))
        }  
    },
    delete: function(req, res) {
        db.Producto.destroy({
            where: {id: req.params.id}
        })
            res.redirect('/productos')
    },
    carritoCompras: (req, res) => {
        let producto = db.Producto.findAll()
        let marcas = db.Marca.findAll()

        Promise.all([producto, marcas])
            .then(function([product, marca]){
                res.render('productCart', {product, marca})
            })
    }
}
module.exports = dbController;