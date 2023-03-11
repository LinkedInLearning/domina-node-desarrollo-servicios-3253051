const fastify = require('fastify')()

fastify.get('/bienvenida', (request, response) => {
  return { mensaje: 'Ruta Bienvenida' };
});

fastify.route({  method: 'GET',  url: '/',  handler: function (request, response) {
  response.send({ mensaje: '¡Hola mundo!' })  
}})


fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(`ERROR: ${err}`);
  }
  console.log('La aplicación está corriendo en http://localhost:3000');
});