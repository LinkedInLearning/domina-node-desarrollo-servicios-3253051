import express from 'express';
const app = express();
app.use(express.json());

app.get('/acceso', (request, response, next) => {
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});