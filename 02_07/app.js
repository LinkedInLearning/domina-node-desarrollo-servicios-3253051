import express from 'express';
const app = express();

const verificarRolMiddleware = (request, response, next) => {
  const usuarioRol = request.params.rol;
  if (usuarioRol === 'admin') {
    next();
  } else {
    const error = {
      mensaje: 'No se tiene acceso', 
      status: 403
    };
    next(error);
  }
};

app.get('/usuario/:rol', verificarRolMiddleware, (request, response) => {
  const usuarioRol = request.params.rol;
  response.json({
    mensaje: `El rol del usuario: ${usuarioRol}`
  });
});

function errorHandler(error, request, response, next) {
  const status = error.status || 500;
  const mensaje = error.mensaje || 'Ocurrió un error';
  response.status(status).json({
    mensaje
  })
}

app.use(errorHandler);

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});