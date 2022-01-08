const express =require('express');
const router = express.Router();

const controller = require ('../controllers/mainController');
const pruebaControllers = require('../controllers/pruebaControllers');

router.get('/', controller.index);

router.get('/service', controller.servicios); 

router.get('/prueba', pruebaControllers.products)

module.exports = router;