const path = require ('path');

/* >-------- ARREGLOS PRODUCTOS--------< */ 
const ofertasIndex = [
    {
        producto:'tablet Lenovo Yoga',
        descuento: "25% OFF",
        image: '/img/productos/tablet-lenovo.jpg' 
    },
    {
        producto: 'iphone 12PRO',
        descuento: '20% OFF',
        image: '/img/productos/i.png'
    },
    {
        producto: 'Auricular Samsung Buds',
        descuento:'30% OFF',
        image: '/img/productos/auriculares-samsung-galaxy-buds-pro.jpg'
    },
    {
        producto: 'Apple Imac 21.5"',
        descuento: '10% OFF',
        image:'/img/productos/imac-i5-21.5.jpg'
    }
]
const ofertasProduct = [
    { 
        image: '/img/productos/i13-10.png',
        producto: "iphone 12",
        precio: "$12000"
    },
    {
        image: '/img/productos/i13-4.png',
        producto: "iphone 11",
        precio: "$15000"
    },
    {
        image: '/img/productos/i13-1.png',
        producto: "iphone 12Pro",
        precio: "$20000"

    }
 
]

/*>--------MAIN CONTROLLER----------<*/ 

const controller = {
    index: (req,res) => {
        res.render('index', {ofertasIndex})
   },
    register: (req, res ) => {
        res.render('register')
    },
    login: (req, res ) => {
        res.render('login')
    },
    carritoCompras: (req, res ) => {
        res.render('productCart')
    },
    detalleProducto: (req, res ) => {
        res.render('productDetail', {ofertasProduct})
    },
    servicios: (req, res ) => {
        res.render('service')
    },
    productAddEdit: (req, res ) => {
        res.render('productAddEdit')
    }
}

module.exports = controller;