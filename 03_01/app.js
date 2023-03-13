const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use((request, response, next) => {
  response.status(404);
  response.render('404', { mensaje: 'No se pudo encontrar la página solicitada.' });
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});