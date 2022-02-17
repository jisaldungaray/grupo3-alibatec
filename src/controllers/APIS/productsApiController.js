const db = require('../../database/models');

const productApiController = {
    list: (req, res) => {
        let productos = db.Producto.findAll()
        let categorias = db.Category.findAll()
        let marcas = db.Marca.findAll()

        Promise.all([productos, categorias, marcas])
            .then(function ([products, category, marcas]) {
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    category: category,
                    marcas: marcas,
                    url: '/api/products/:id',
                    status: 200
                });
            })

    },

    detail: (req, res) => {
        db.Producto
            .findByPk(req.params.id, { include: ["category", "marca"] })
            .then((product) => {
                return res.status(200).json({
                    data: {
                        id: product.id,
                        name: product.model,
                        description: product.detail,
                        category: product.category.category,
                        marca: product.marca.tipo
                    }

                });
            })

    },

    add: (req, res) => {
        let producto = db.Producto.findAll()
        let marcas = db.Marca.findAll()
        let categorys = db.Category.findAll()
        let estado = db.Estado.findAll()

        Promise.all([producto, marcas, categorys, estado])
            .then(function ([product, marca, category, estado]) {
                return res.status(200).json({
                    product, marca, category, estado
                })
            })
    },
    create: (req, res) => {
        db.Producto
            .create({
                marca_id: req.body.marca,
                model: req.body.model,
                detail: req.body.detail,
                categoria_id: req.body.category,
                price: req.body.price,
                discount: req.body.discount,
                estado_id: req.body.estado,
                //    image: "/img/productos/"  + req.file.filename 
            })
            .then((product) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/create'
                    },
                    data: product,
                })
            })
            .catch(err => res.send(err))
    },
    edit: (req, res) => {
        let producto = db.Producto.findByPk(req.params.id)
        let marcas = db.Marca.findAll()
        let categorys = db.Category.findAll()
        let estado = db.Estado.findAll()

        Promise.all([producto, marcas, categorys, estado])
            .then(function ([product, marca, category, estado]) {
                return res.status(200).json({
                    product, marca, category, estado
                })
            })
    },
    update: (req, res) => {
        db.Producto
            .update({
                marca_id: req.body.marca,
                model: req.body.model,
                detail: req.body.detail,
                price: req.body.price,
                discount: req.body.discount,
                categoria_id: req.body.category,
                // image: "/img/productos/"  + req.file.filename 
            }, {
                where: { id: req.params.id }
            })
            .then((product) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/update/:id'
                    },
                    data: product,
                })
            })
            .catch(err => res.send(err))
    },
    destroy: (req, res) => {
        db.Producto
            .destroy({
                where: { id: req.params.id }
            })
            .then((product) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/destroy/:id'
                    },
                    data: product
                })
            })
            .catch(err => res.send(err))
    }

}

module.exports = productApiController;