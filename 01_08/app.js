const fastify = require('fastify')()

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(`ERROR: ${err}`);
  }
  console.log('La aplicación está corriendo en http://localhost:3000');
});