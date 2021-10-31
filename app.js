const express = require('express')

const app = express();

const path = require('path');

const router = require('./routes/mainRoutes');

app.use(express.static((path.resolve(__dirname,'public'))));
 
app.set('view engine', 'ejs');
// Rutas aca abajo

app.use(router);

// Hasta aca

app.listen (4000, () => {
    console.log ('servidor corriendo, Host 4000')
});
