const fastify = require('fastify')();
const jwt = require('@fastify/jwt');

async function VerificarCredenciales(usuario, contrasena) {
    return usuario === 'admin' && contrasena === 'contraseña'
}

fastify.post('/login', async (request, response) => {
    const { usuario, contrasena } = request.body;

    const isValid = await VerificarCredenciales(usuario, contrasena)

    if (!isValid) {
        return response.status(401).send({ mensaje: 'Credenciales no válidas' })
    }
});

fastify.get('/acceso', async (request, response) => {
    response.send({ mensaje: '¡Le damos la bienvenida!' });
});


fastify.listen({ port: 3000 }, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('La aplicación está corriendo en http://localhost:3000');
});