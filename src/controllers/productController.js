const fs = require('fs');
const path = require ('path');


const productFilepath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productFilepath, 'utf-8'))

const controller = {
    index: (req,res) => {
        res.render('productos' , {products})
   },

    detalleProducto: (req, res ) => {
        res.render('productDetail', {products})
    },

    productAdd: (req, res ) => {
        res.render('productAdd')
    },
    store: (req, res ) => {
        const nuevoProducto = {
            id: products.length + 1,
            name:req.body.name,
            model:req.body.model,
            price: req.body.price,
            category: req.body.category,
            detail:req.body.detail,
            description:req.body.description,
            image: req.file.filename
        }
        
        products.push(nuevoProducto)
        fs.writeFileSync(productFilepath, JSON.stringify(products, null, {encoding: 'utf-8'}));
        res.redirect('/productos')
        console.log (products)
    },
    productEdit: (req, res ) => {
        res.render('productEdit')
    },

    carritoCompras: (req, res ) => {
        res.render('productCart')
    },

    
}

module.exports = controller;

