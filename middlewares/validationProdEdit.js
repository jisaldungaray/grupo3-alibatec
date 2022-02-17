const { body } = require('express-validator');
const path = require('path');
const validationProductEdit = [
    body('model').notEmpty().withMessage('Debe completar este campo').isLength({min: 2}).withMessage('Debe completar este campo'),
    body('detail').notEmpty().withMessage('Debe completar este campo').isLength({min: 20}).withMessage('Debe completar este campo'),
    body('price').notEmpty().withMessage('Debe poner un precio al producto'),
    body('imagen').custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file){
            throw new TypeError('Debes  subir una imagen')
        }else {
		let fileExtension = path.extname(file.originalname);
			if (!extensionesPermitidas.includes(fileExtension)) {
				throw new TypeError(`Las extensiones de archivo permitidas son ${extensionesPermitidas.join(', ')}`);
			}
		}
        return true;
    })
];
module.exports = validationProductEdit;
