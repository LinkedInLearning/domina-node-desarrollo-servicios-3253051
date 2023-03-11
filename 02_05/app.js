const fastify = require('fastify')();
const path = require('path');
const fs = require('fs');

fastify.get('/descargar', (request, response) => {
    response.header('Content-Disposition', 'attachment; filename=volcan_poas.pdf');
    response.type('application/pdf');    
    const archivoStream = fs.createReadStream(path.join(__dirname, 'publico', 'volcan_poas.pdf'));
    response.send(archivoStream);
});

fastify.listen({ port: 3000 }, (error) => {
    if (error) {
        console.error(error);
    }
    console.log('La aplicación está corriendo en http://localhost:3000');
});