const http = require('http');
const url = require('url');

const rutas = {
  '/': (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const respuesta = {
      mensaje: '¡Le damos la bienvenida!'
    };
    response.end(JSON.stringify(respuesta));
  },
  '/acceso': (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const respuesta = {
        mensaje: 'Usted tiene acceso a la aplicación.'
    };
    response.end(JSON.stringify(respuesta));
  }
};

const noEncontradoHandler = (request, response) => {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'application/json');
  const respuesta = {
    mensaje: 'No se encontró la ruta'
  };
  response.end(JSON.stringify(respuesta));
};

const server = http.createServer((request, response) => {
  const obtenerUrl = url.parse(request.url);
  const ruta = obtenerUrl.pathname;
  const handler = rutas[ruta]  || noEncontradoHandler;
  handler(request, response);
});

server.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});