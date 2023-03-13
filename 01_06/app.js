const fastify = require('fastify')();

fastify.get('/usuario', async (request, reply) => {
  const { nombre, apellido } = request.query;  
  return `Información del usuario:
  Nombre: ${nombre}
  Apellido: ${apellido}`;  
});

fastify.listen({ port: 3000 }, (error) => {
  if (error) {
    console.error(`ERROR: ${error}`);
  }
  console.log('La aplicación está corriendo en http://localhost:3000');
});