const fastify = require('fastify')();
const path = require('path');
const fs = require('fs');

fastify.get('/descargar', (request, response) => {
    
});

fastify.listen({ port: 3000 }, (error) => {
    if (error) {
        console.error(error);
    }
    console.log('La aplicación está corriendo en http://localhost:3000');
});