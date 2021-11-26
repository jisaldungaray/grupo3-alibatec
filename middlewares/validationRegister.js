const {check}= require('express-validator');
const validateRegister = [
    check('name').notEmpty().withMessage('Debe completar este campo'),
    check('lastname').notEmpty().withMessage('Debe completar este campo'),
    check('email').notEmpty().isEmail().withMessage('Debe completar este campo'),
    check('password').notEmpty().isLength({min: 8}).withMessage('Debe completar este campo'),
];
module.exports = validateRegister