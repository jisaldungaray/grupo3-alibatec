const { body }= require('express-validator');
const validationService = [
    body('nombre').notEmpty().withMessage('Debe completar este campo'),
    body('email').notEmpty().withMessage('Debe completar este campo').isEmail().withMessage('Debe ser un email válido'),
    body('comentario').notEmpty().withMessage('Debe completar este campo'),
];

module.exports= validationService;