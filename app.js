const express = require('express')

const app = express();

const path = require('path');

const router = require('./src/routes/mainRoutes');
const productRouter = require('./src/routes/productsRoutes');
const userRouter = require('./src/routes/userRoutes');

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', router);
app.use('/productos' , productRouter);
app.use('/user' , userRouter);

// Hasta aca

app.listen (4000, () => {
    console.log ('servidor corriendo, Host 4000')
});
