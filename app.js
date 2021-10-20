const express = require('express');
const app = express();

const path = require('path');

app.use(express.static((path.resolve(__dirname,'public'))));
 
// Rutas aca abajo

app.get ('/', (req,res) => {
        res.sendFile(path.resolve(__dirname,'./views/index.html'))
   });

app.get('/producto',(req, res ) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
});

app.get('/login',(req, res ) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/register',(req, res ) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/productCart',(req, res ) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
});
app.get('/service',(req, res ) => {
    res.sendFile(path.join(__dirname, './views/service.html'))
});


// Hasta aca

app.listen (4000, () => {
    console.log ('servidor corriendo, Host 4000')
});
