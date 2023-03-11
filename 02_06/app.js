import express from 'express';
const app = express();


app.get('/ip', function(request, response) {
  let direccionIp = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
  if (direccionIp === '::1') {
    direccionIp = '127.0.0.1';
  }
  response.send(`La IP es: ${direccionIp}`);

});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});