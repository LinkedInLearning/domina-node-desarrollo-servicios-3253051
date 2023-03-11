import express from 'express';
const app = express();

app.get('/libro/:libroId/:pagina', function (request, response) {
  const libroId = request.params.libroId;
  const pagina = request.params.pagina;

  response.send(`Información del libro requerido:
  ID: ${libroId}
  Página: ${pagina}`);
})

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});