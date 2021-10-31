const express = require('express')

const app = express();

const path = require('path');

const router = require('./src/routes/mainRoutes');

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(router);

// Hasta aca

app.listen (4000, () => {
    console.log ('servidor corriendo, Host 4000')
});
