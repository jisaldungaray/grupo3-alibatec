const path = require('path')
const multer = require('multer');


// Ejecucion MULTER
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb (null, 'public/img/productos')
    },
    filename: function (req, file, cb){
        cb (null, file.fieldname + Date.now() + '_img' + path.extname(file.originalname))
    }
})
const upload = multer({storage});

module.exports = upload