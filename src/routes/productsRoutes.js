
const path = require('path')
const express =require('express');
const multer = require('multer');

const router = express.Router();

const controller = require ('../controllers/productController');

// Ejecucion MULTER
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb (null, path.join(__dirname, '../../public/img/productos'))
    },
    filename: function (req, file, cb){
        cb (null, Date.now()+ '_img' + path.extname(file.originalname))
    }
})
const upload = multer({storage})


// Ruta TODOS LOS PRODUCTOS
router.get('/', controller.index);

//RUTA DETALLE DE UN PRODUCTO
router.get('/detail/:id?' , controller.detalleProducto);

// RUTA CARRITO DE COMPRAS
router.get('/shop', controller.carritoCompras);

//RUTA CREAR PRODUCTO
router.get('/add/', controller.productAdd); 
router.post('/add' , upload.single('imagen'), controller.store );
//FALTA AGREGAR BOTON DE EDITAR PRODUCTO EN "DETALLE"

//RUTA EDITAR PRODUCTO
router.get('/edit/:id', controller.productEdit);

//RUTA ELIMINAR PRODUCTO
//router.delete('/delete/:id', controller.delete)
//FALTA AGREGAR BOTON PARA ELIMINAR PRODUCTO EN "DETALLE"



module.exports = router;