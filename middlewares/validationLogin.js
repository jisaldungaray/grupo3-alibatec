const {check}= require('express-validator');
const validateLogin = [
    check('email').notEmpty().isEmail().withMessage('Debe completar este campo'),
    check('password').notEmpty().isLength({min: 8}).withMessage('Debe completar este campo'),
];

module.exports= validateLogin