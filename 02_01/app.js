import express from 'express';
const app = express();
app.use(express.json());

app.get('/acceso', (request, response, next) => {
  const error = new Error('No se tiene acceso');
  error.status = 403;
  next(error);
});

app.use((error, request, response, next) => {
  const status = error.status || 500;
  response.status(status).json({
    mensaje: error.message
  });
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});