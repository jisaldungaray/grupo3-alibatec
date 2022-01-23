const {body}= require('express-validator');
const path = require ('path');
const validateRegister = [
    body('name').notEmpty().isLength({min: 2}).withMessage('Debe completar este campo'),
    body('lastname').notEmpty().isLength({min: 2}).withMessage('Debe completar este campo'),
    body('email').notEmpty().withMessage('Debe completar este campo').isEmail().withMessage('Debe escribir un email válido'),
    body('password').notEmpty().withMessage('Debe completar este campo').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1
    }).withMessage('Debe tener mínimo 8 caracteres'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file){
            throw new TypeError('Debes subir una imagen')
        }else {
		let fileExtension = path.extname(file.originalname);
			if (!extensionesPermitidas.includes(fileExtension)) {
				throw new TypeError(`Las extensiones de archivo permitidas son ${extensionesPermitidas.join(', ')}`);
			}
		}
        return true;
    })
];
module.exports = validateRegister;