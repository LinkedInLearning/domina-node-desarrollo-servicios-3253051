import express from 'express';
const app = express();

app.get('/acceso', (request, response) => {
  response.status(200).send('¡Le damos la bienvenida!');
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});