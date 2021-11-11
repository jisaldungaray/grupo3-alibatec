const fs = require('fs');
const path = require ('path');

const productFilepath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productFilepath, 'utf-8'))


/*>--------MAIN CONTROLLER----------<*/ 

const controller = {
    index: (req,res) => {
        res.render('index', {products})
   },
    servicios: (req, res ) => {
        res.render('service')
    },
   
}

module.exports = controller;
