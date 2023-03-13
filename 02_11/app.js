import express from 'express';

const app = express();

app.get('/datos', (request, response) => {
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});