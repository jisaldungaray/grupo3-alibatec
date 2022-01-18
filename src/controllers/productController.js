// const fs = require('fs');
// const path = require ('path');


// const productFilepath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productFilepath, 'utf-8'))

// const controller = {
//     index: (req,res) => {
//         res.render('productos' , {products})
//     },
//     detalleProducto: (req, res ) => {
// 		const product = products.find(elemento =>
//             elemento.id == req.params.id)
// 		res.render('productDetail', {product}) 
//     },
//     productAdd: (req, res ) => {
//         res.render('productAdd')
//     },
//     store: (req, res ) => {
//         const nuevoProducto = {
//             id: products [products.length - 1].id + 1,
//             ...req.body,
//             image: req.file.filename
//         }
//         products.push(nuevoProducto)
//         fs.writeFileSync(productFilepath, JSON.stringify(products, null, {encoding: 'utf-8'}));
//         res.redirect('/productos')
//     },
//     productEdit: (req, res ) => {
//         const id = req.params.id
// 		const producToEdit = products.find(product => product.id == id);
// 		res.render('productEdit', {product:producToEdit})
//     },
//     update: (req, res) => {
//         let id = req.params.id;
// 		let productToEdit = products.find(product => product.id == id)
// 		let image
// 		if(req.file != undefined){
// 			image = req.file.filename
// 		} else {
// 			image = productToEdit.image
// 		}
// 		productToEdit = {
// 			id: productToEdit.id,
// 			...req.body,
// 			image: image,
// 		};
// 		let newProducts = products.map(product => {
// 			if (product.id == productToEdit.id) {
// 				return product = {...productToEdit};
// 			}
// 			return product;
// 		})
// 		fs.writeFileSync(productFilepath, JSON.stringify(newProducts, null, ' '));
// 		res.redirect('/productos');
//     },
//     carritoCompras: (req, res ) => {
//         res.render('productCart')
//     },
//     delete: (req, res) =>{
//         let id = req.params.id;
// 		let finalProducts = products.filter(product => product.id != id);
// 		fs.writeFileSync(productFilepath, JSON.stringify(finalProducts, null, ' '));
// 		res.redirect('/productos');
//     }
// }

// module.exports = controller;

