import express from 'express';
const app = express();

app.get('/', (request, response) => {
  response.send('¡Hola Mundo!');
});

app.listen(3001, () => {
  console.log('La aplicación está corriendo en http://localhost:3001');
});