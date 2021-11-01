const path = require ('path');

const ofertasIndex = require('./productos');


const controller = {
    index: (req,res) => {
        res.render('index', {ofertasIndex})
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
    },
    productAddEdit: (req, res ) => {
        res.render('productAddEdit')
    }
}

module.exports = controller;