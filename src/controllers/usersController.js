const fs = require('fs');
const path = require ('path');

const { validationResult } = require('express-validator');
const { isBuffer } = require('util');

const userFilepath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilepath, 'utf-8'))

const controller = {
    register: (req, res ) => {
        res.render('register');
    },
    processRegister: (req, res)=>{
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			})}
    },
    login: (req, res ) => {
        res.render('login')
    },
    processlogin: (req, res ) => {

    },
    profile: (req, res ) => {
        res.render('profile');
    }
}

module.exports = controller;