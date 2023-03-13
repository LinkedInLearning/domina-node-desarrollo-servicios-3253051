const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  const obtenerUrl = url.parse(request.url);
  const ruta = obtenerUrl.pathname;
});

server.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});