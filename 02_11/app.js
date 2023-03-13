import express from 'express';

const app = express();

app.get('/datos', (request, response) => {
  response.set('Content-Type', 'application/xml');
  const datosXML = '<root><mensaje>¡Hola Mundo!</mensaje></root>';  
  response.send(datosXML);  
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});