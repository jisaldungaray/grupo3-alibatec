const express =require('express');
const router = express.Router();
const validateLogin = require ('../../middlewares/validationLogin');
const validateRegister = require('../../middlewares/validationRegister');

const controller = require ('../controllers/usersController');


router.get('/login', controller.login);
router.post('/login',validateLogin, controller.processlogin)

router.get('/register',validateRegister, controller.register);

router.get('/profile', controller.profile);


module.exports = router;