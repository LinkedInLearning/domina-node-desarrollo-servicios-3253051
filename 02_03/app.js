import express from 'express';
const app = express();

app.get('/descargar', (request, response) => {
  const rutaArchivo = './publico/volcan_poas.pdf';
  response.download(rutaArchivo, (error) => {
    if (error) {
      console.log('Error al descargar el archivo: ', error);
      response.status(500).send('Error de descarga del archivo');
    }
  });  

});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});