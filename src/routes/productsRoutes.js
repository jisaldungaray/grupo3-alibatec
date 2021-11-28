
const path = require('path')
const express =require('express');
const multer = require('multer');

const router = express.Router();

const controller = require ('../controllers/productController');
const upload = require('../../middlewares/multerProduct');


// Ruta TODOS LOS PRODUCTOS
router.get('/', controller.index);

//RUTA DETALLE DE UN PRODUCTO
router.get('/detail/:id' , controller.detalleProducto);

// RUTA CARRITO DE COMPRAS
router.get('/shop', controller.carritoCompras);

//RUTA CREAR PRODUCTO
router.get('/add/', controller.productAdd); 
router.post('/' , upload.single('imagen'), controller.store );

//RUTA EDITAR PRODUCTO
router.get('/edit/:id', controller.productEdit);
router.put('/edit/:id', upload.single('imagen'), controller.update);

//RUTA ELIMINAR PRODUCTO
router.delete('/delete/:id', controller.delete);



module.exports = router;