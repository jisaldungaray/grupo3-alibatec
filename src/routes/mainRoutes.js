const express =require('express');
const router = express.Router();

const controller = require ('../controllers/dbMainController');
const validationService = require('../../middlewares/validationService')

router.get('/', controller.index);

router.get('/service', controller.servicios); 
router.post('/service', validationService, controller.service); 


module.exports = router;