const { body }= require('express-validator');
const path = require ('path');
const validationProducts = [
    body('model').notEmpty().isLength({min: 2}).withMessage('Debe completar este campo'),
    body('price').notEmpty().withMessage('Debe poner un precio al producto'),
    body('detail').notEmpty().isLength({min: 20}).withMessage('Debe completar este campo'),
    body('marca').notEmpty().withMessage('Debe seleccionar una marca'),
    body('category').notEmpty().withMessage('Debe asignar categoria a su producto'),
    body('estado').notEmpty().withMessage('Debe seleccionar: en oferta, destacado o ninguno'),
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
module.exports = validationProducts;