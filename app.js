const express = require('express');
const session = require('express-session');

const app = express();

const path = require('path');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');
const usuarioapp = require('./middlewares/usuarioapp')

const router = require('./src/routes/mainRoutes');
const productRouter = require('./src/routes/productsRoutes');
const userRouter = require('./src/routes/userRoutes');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "It's secret",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());
app.use(usuarioapp);


app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/', router);
app.use('/productos' , productRouter);
app.use('/user' , userRouter);

// Hasta aca

app.listen (4000, () => {
    console.log ('servidor corriendo, Host 4000')
});