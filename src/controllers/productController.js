const fs = require('fs');
const path = require ('path');

const productFilepath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productFilepath, 'utf-8'))

const controller = {
    index: (req,res) => {
        res.render('index', {ofertasIndex})
   },
    productAdd: (req, res ) => {
        res.render('productAdd')
    },
    productEdit: (req, res ) => {
        res.render('productEdit')
    },
    carritoCompras: (req, res ) => {
        res.render('productCart')
    },
    detalleProducto: (req, res ) => {
        res.render('productDetail', {ofertasProduct})
    },
    
}

module.exports = controller;

