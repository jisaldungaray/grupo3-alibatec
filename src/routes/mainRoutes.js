const express =require('express');
const router = express.Router();

const controller = require ('../controllers/mainController');

router.get('/', controller.index);

router.get('/productCart', controller.carritoCompras);

router.get('/login', controller.login);

router.get('/register', controller.register);

router.get('/producto', controller.detalleProducto);

router.get('/service', controller.servicios); 

module.exports = router;