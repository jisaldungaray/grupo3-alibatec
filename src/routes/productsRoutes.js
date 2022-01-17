
const path = require('path')
const express =require('express');
const multer = require('multer');

const router = express.Router();

const controller = require ('../controllers/productController');
const upload = require('../../middlewares/multerProduct');
const dbController = require('../controllers/dbCreateController');


// Ruta TODOS LOS PRODUCTOS
router.get('/', dbController.productList);

//RUTA DETALLE DE UN PRODUCTO
router.get('/detail/:id' , dbController.detalle);

// RUTA CARRITO DE COMPRAS
router.get('/shop', controller.carritoCompras);

//RUTA CREAR PRODUCTO
router.get('/add/', dbController.create); 
router.post('/' , upload.single('imagen'), dbController.store);

//RUTA EDITAR PRODUCTO
router.get('/edit/:id', dbController.edit);
router.put('/edit/:id', upload.single('imagen'), dbController.update);

//RUTA ELIMINAR PRODUCTO
router.delete('/delete/:id', dbController.delete);



module.exports = router;