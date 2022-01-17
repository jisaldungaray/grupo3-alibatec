const express = require('express');
const router = express.Router();

/*middlewares*/
const validationLogin = require('../../middlewares/validationLogin');
const validationRegister = require('../../middlewares/validationRegister');
const usuarioLogeado = require('../../middlewares/usuarioLogeado');
const autenticacion = require('../../middlewares/autenticacion')
const upload = require('../../middlewares/multerRegister');

/* controller */
const dbUserController = require ('../controllers/dbUserController');

/*Rutas*/
//Formulario de Login
router.get('/login', usuarioLogeado ,dbUserController.login);

//Proceso de login
router.post('/login',validationLogin, dbUserController.processlogin);

//Formulario de registro
router.get('/register', usuarioLogeado, dbUserController.register);

//Proceso de registro
router.post('/register', upload.single('image'),validationRegister, dbUserController.processRegister);

//Perfil
//router.get('/profile', autenticacion , dbUserController.profile);

//Logout
//router.get('/logout', dbUserController.logout);


module.exports = router;