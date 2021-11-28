const express = require('express');
const router = express.Router();

/*middlewares*/
const validateLogin = require('../../middlewares/validationLogin');
const validateRegister = require('../../middlewares/validationRegister');
const upload = require('../../middlewares/multerRegister');

/* controller */
const controller = require ('../controllers/usersController');

/*Rutas*/

//Formulario de Login
router.get('/login', controller.login);

//Proceso de login
router.post('/login',validateLogin, controller.processlogin);

//Formulario de registro
router.get('/register', controller.register);

//Proceso de registro
router.post('/register', upload.single('image'),validateRegister, controller.processRegister);

//Perfil
router.get('/profile', controller.profile);

//Logout
//router.get('/logout', controller.logout);


module.exports = router;