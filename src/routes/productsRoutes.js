
const path = require('path')
const express =require('express');
const multer = require('multer');

const router = express.Router();

//const controller = require ('../controllers/productController');
const upload = require('../../middlewares/multerProduct');
const dbController = require('../controllers/dbProductsController');
const validationProducts = require('../../middlewares/validationProducts');
const validationProductEdit = require('../../middlewares/validationProdEdit');

// Ruta TODOS LOS PRODUCTOS
router.get('/', dbController.productList);

//RUTA DETALLE DE UN PRODUCTO
router.get('/detail/:id' , dbController.detalle);

// RUTA CARRITO DE COMPRAS
router.get('/shop', dbController.carritoCompras);

//RUTA CREAR PRODUCTO
router.get('/add/', dbController.create); 
router.post('/add' , upload.single('imagen'), validationProducts, dbController.store);

//RUTA EDITAR PRODUCTO
router.get('/edit/:id', dbController.edit);
router.put('/edit/:id', upload.single('imagen'), validationProductEdit, dbController.update);

//RUTA ELIMINAR PRODUCTO
router.delete('/delete/:id', dbController.delete);



module.exports = router;