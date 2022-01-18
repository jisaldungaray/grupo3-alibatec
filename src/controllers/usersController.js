// const fs = require('fs');
// const path = require ('path');
// const bcryptjs = require('bcryptjs');
// const User = require ('../models/User');
// const db = require('../database/models');
// const { Op } = require("sequelize");

// const { validationResult } = require('express-validator');

// const userFilepath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(userFilepath, 'utf-8'))

// const controller = {
//     register: (req, res ) => {
//         res.render('register');
//     },
//     processRegister: (req, res)=>{
//         let resultValidation = validationResult(req);

//         if (resultValidation.errors.length >0) {
// 			return res.render('register', {
// 				errors: resultValidation.mapped(),
// 				old : req.body
// 			});
//         }
//         let userInDB = User.findByField('email', req.body.email);

// 		if (userInDB) {
// 			return res.render('register', {
// 				errors: {
// 					email: {
// 						msg: 'Este email ya está registrado'
// 					}
// 				},
// 				oldData: req.body
// 			});
// 		}
//         let usuario={
//         ...req.body,
//         password: bcryptjs.hashSync(req.body.password,10),
//         image: req.file.filename,
//         }
//         let userCreated = User.create(usuario);
        
//         res.redirect('/user/login');
// 		db.Usuarios.create({
			
// 		})
//     },
//     login: (req, res ) => { 
//         res.render('login')
//     },
//     processlogin: (req, res ) => {
//         let userToLogin = User.findByField('email', req.body.email);
		
// 		if(userToLogin) {
// 			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
// 			if (isOkThePassword) {
// 				delete userToLogin.password;
// 				req.session.userLogged = userToLogin;

// 				if(req.body.remember_user) {
// 					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
// 				}
// 				return res.redirect('/user/profile');
// 			} 
// 			return res.render('login', {
// 				errors: {
// 					email: {
// 						msg: 'Las credenciales son inválidas'
// 					}
// 				}
// 			});
// 		}
// 		return res.render('login', {
// 			errors: {
// 				email: {
// 					msg: 'No se encuentra este email en nuestra base de datos'
// 				}
// 			}
// 		});
		
// 	},
//     profile: (req, res) => {
//         res.render('profile', {user: req.session.userLogged});
//     },
//     logout: (req, res) => {
// 		res.clearCookie('userEmail');
// 		req.session.destroy();
// 		return res.redirect('/');
// 	}
// }

// module.exports = controller;