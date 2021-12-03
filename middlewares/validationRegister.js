const {body}= require('express-validator');
const path = require ('path');
const validateRegister = [
    body('name').notEmpty().withMessage('Debe completar este campo'),
    body('lastname').notEmpty().withMessage('Debe completar este campo'),
    body('email').notEmpty().withMessage('Debe completar este campo').bail().isEmail().withMessage('Debe escribir un email válido'),
    body('password').notEmpty().withMessage('Debe completar este campo').isLength({min: 8}).withMessage('Debe tener mínimo 8 caracteres'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file){
            throw new TypeError('Debes que subir una imagen')
        }else {
		let fileExtension = path.extname(file.originalname);
			if (!extensionesPermitidas.includes(fileExtension)) {
				throw new TypeError(`Las extensiones de archivo permitidas son ${extensionesPermitidas.join(', ')}`);
			}
		}
        return true;
    })
];
module.exports = validateRegister 