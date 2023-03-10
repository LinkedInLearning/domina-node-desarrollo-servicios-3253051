const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/usuario', (request, response) => {
  const nombre = request.body.nombre;
  const email = request.body.email;

  response.send(`Datos recibidos con éxito:\n
  Nombre: ${nombre} \n
  Email: ${email}`);
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});