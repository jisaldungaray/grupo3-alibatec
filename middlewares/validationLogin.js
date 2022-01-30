const { body }= require('express-validator');
const validationLogin = [
    body('email').notEmpty().isEmail().withMessage('Debe completar este campo'),
    body('password').notEmpty().isLength({min: 8}).withMessage('Debe completar este campo'),
];

module.exports= validationLogin