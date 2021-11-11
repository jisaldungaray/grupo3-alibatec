const path = require('path')
const express =require('express');
const multer = require('multer');

const router = express.Router();

const controller = require ('../controllers/productController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb (null, '/public/img/productos')
    },
    filename: function (req, file, cb){
        cb (null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

router.get('/', controller.index);

router.get('/productCart', controller.carritoCompras);

router.get('/producto', controller.detalleProducto);

router.get('/productAdd', controller.productAdd); 
router.post('/productAdd' , upload.single('imagen'), controller.store );

router.get('/productEdit', controller.productEdit); 



module.exports = router;