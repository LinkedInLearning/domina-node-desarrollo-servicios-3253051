const express = require('express');
const app = express();

app.get('/usuarios', (request, response) => {

});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});