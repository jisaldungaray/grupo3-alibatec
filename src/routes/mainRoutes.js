const express =require('express');
const router = express.Router();

const controller = require ('../controllers/dbMainController');



router.get('/', controller.index);

router.get('/service', controller.servicios); 




module.exports = router;