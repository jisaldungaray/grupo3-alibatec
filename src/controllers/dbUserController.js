const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const {Op} = require('sequelize'); 
const sequelize = db.Sequelize; 

const dbUserController = {
    
    register: (req, res) => {
        db.CategoriaUsuario.findAll()
        .then((categoria) => {
            res.render('register', {categoria})
           // console.log (categoria)
        })
        .catch(err => console.log(err))
    },
    processRegister:async (req, res) => {
        const userValidation = validationResult(req);

        const userSearch = await db.Usuarios.findAll({
            where: {
                email:{
                    [Op.like]: req.body.email 
                }
            }
        })
        if(!userValidation.errors.length && !userSearch){

            db.Usuarios.create({
                name: req.body.name,
                last_name: req.body.lastname,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 12),
                image: "/img/users/"  + req.file.filename,
                categoriaUser_id: req.body.category 
            })
            .then((user) => {
                req.session.userLogged = user;
                res.redirect("/profile")
            })
        }/* else {
            if(userSearch){
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado' 
                        }
                    },
                    oldData: req.body
                })} else {
                    res.render('register', {
                        errors: resultValidation.mapped(),
                        oldData: req.body
                    });
                }
        }*/

    },
    login: (req, res) => {
        res.render('login')
    },
    processlogin: async (req, res) => {
        
        const usertoLogIn = await db.Usuarios.findAll({
            where: {
                email:{
                    [Op.like]: req.body.email 
                }
            }
        })

        if(usertoLogIn) {
			let checkPassword = bcryptjs.compareSync(req.body.password, usertoLogIn.password);
			if (checkPassword) {
				delete usertoLogIn.password;
				req.session.userLogged = usertoLogIn;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
				return res.redirect('/profile');
			} 
			return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}
		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
    profile: (req, res) => {
        db.Usuarios.findByPk({
            where: {id: req.params.id}
        })
        res.render('profile', {user: req.session.userLogged});
    },

}



module.exports = dbUserController;