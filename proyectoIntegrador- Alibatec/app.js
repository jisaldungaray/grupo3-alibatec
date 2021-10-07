const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public')); 
 
// Rutas aca abajo


// Hasta aca
app.listen(3000, (res, req) => console.log('Servidor corriendo, host 3000'));
