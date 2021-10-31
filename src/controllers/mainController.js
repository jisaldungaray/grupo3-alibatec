const path = require ('path');

const controller = {
    index: (req,res) => {
        res.render('index')
   },
    register: (req, res ) => {
        res.render('register')
    },
    login: (req, res ) => {
        res.render('login')
    },
    carritoCompras: (req, res ) => {
        res.render('productCart')
    },
    detalleProducto: (req, res ) => {
        res.render('productDetail')
    },
    servicios: (req, res ) => {
        res.render('service')
    }
}

module.exports = controller;