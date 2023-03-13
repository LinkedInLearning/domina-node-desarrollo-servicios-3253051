import express from 'express';
const app = express();

const autenticarUsuario = (request, response, next) => {
  if (request.headers.authorization === 'Bearer 123w4') {
    request.user = {
      rol: 'admin'
    };
    next();
  } else {
    response.status(401).send('Error de autenticación');
  }
};

const autorizarUsuario = (request, response, next) => {
  if (request.user.rol === 'admin') {
      next();
  } else {
    response.status(403).send('Error de autorización');
  }
};

app.get('/acceso', autenticarUsuario, autorizarUsuario, (request, response) => {
  response.status(200).send('¡Le damos la bienvenida!');
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});