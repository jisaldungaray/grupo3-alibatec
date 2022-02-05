const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const {Op} = require('sequelize'); 
const sequelize = db.Sequelize; 

const dbUserController = {
    
    register: (req, res) => {
            res.render('register')
    },
    processRegister: (req, res) => {
        let resultValidation = validationResult(req);

        if(resultValidation.errors.length)
            return res.render('register', {
                errors: resultValidation.mapped(),
                old: req.body
            });
        
            db.Usuarios.findOne({
                where: {email: req.body.email}
            }).then((userInDB)=>{
            
            if(userInDB) {
                return res.render('register', {
                    errors:{
                        email:{
                            msg: 'Este email ya fue registrado'
                        }
                    },
                    oldData: req.body
                })
            }else {
            db.Usuarios.create({
                name: req.body.name,
                last_name: req.body.lastname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                image: "/img/users/" + req.file.filename,
                categoria: req.body.category
            }).then((user) => {
                console.log(user)
                req.session.userLogged = user
                res.redirect('/user/profile/' + user.id )
            })}
        })
            
    },

    login: (req, res) => {
        res.render('login')
    },
    processlogin: async (req, res) => {
        
        let resultValidation = validationResult(req);

        if(resultValidation.errors.length)
            return res.render('login', {
                errors: resultValidation.mapped(),
            });
        const userToLogIn = await db.Usuarios.findOne({
            where: {email: req.body.email}
        })

        if(userToLogIn) {
			let checkPassword = bcrypt.compareSync(req.body.password, userToLogIn.password);
			if (checkPassword) {
				delete userToLogIn.password;
				req.session.userLogged = userToLogIn;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
				return res.redirect('/user/profile/' + userToLogIn.id);
			} 
			return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			})
		}
		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		})
        
	},
    profile: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
            .then((user)=>{
                req.session.userLogged = user;
                res.render('profile', {user})
            });
    },
    userEdit: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
        .then((user)=> {
            req.session.userLogged = user;
            res.render('userEdit', {user} )
        })
    },
    update: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
            .then((user)=>{
                user.update({
                    name:req.body.name,
                    last_name: req.body.lastname,
                    email: req.body.email,
                    image:"/img/users/" + req.file.filename,
                }).then((user) => {
                    req.session.userLogged = user;
                    res.redirect('/user/profile/' + user.id)
                })
        })
    },
    delete: (req, res) => {
        db.Usuarios.destroy({
            where: {id: req.params.id}  
        }).then(()=> {
            res.clearCookie('userEmail');
		    req.session.destroy();
            res.redirect('/')
        })
    },
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}



module.exports = dbUserController;