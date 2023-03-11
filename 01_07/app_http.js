import http from 'http';

const server = http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.writeHead(200);
  response.end('¡Hola Mundo!');
});

server.listen(3000, function () {
  console.log('La aplicación está corriendo en http://localhost:3001');
});