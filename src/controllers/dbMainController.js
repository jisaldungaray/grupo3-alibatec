const db = require('../database/models');
const { validationResult } = require('express-validator');

const mainController = {
    index: (req,res) => {
        db.Producto.findAll({
            include : ["estado"]
        })
            .then((product) =>{
                res.render('index', {product})
    })
    },
    servicios: (req, res ) => {
        res.render('service')
    },
    service: (req, res ) => {
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length)
            return res.render('service', {
                errors: resultValidation.mapped(),
                old: req.body
            });
        db.Service.create({
            nombre: req.body.nombre,
            email: req.body.email,
            comentario: req.body.comentario
        }).then((result) => {
            console.log(result)
            res.redirect('/')
            })
            .catch(err => console.log (err))
        }
}

module.exports = mainController;