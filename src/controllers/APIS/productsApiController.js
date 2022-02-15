const db = require('../../database/models');

const productApiController = {
    list: (req, res) => {
        let productos = db.Producto.findAll()
        let categorias = db.Category.findAll()
        let marcas = db.Marca.findAll()

        Promise.all([productos, categorias, marcas])
            .then(function([products, category, marcas]){
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
            .findByPk(req.params.id, {include:["category", "marca"]})
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

    }
}

module.exports = productApiController;