import express from 'express';
const app = express();

app.get('/usuario/:rol', (request, response) => {
  const usuarioRol = request.params.rol;
  response.json({
    mensaje: `El rol del usuario: ${usuarioRol}`
  });
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});