import express from 'express';
const app = express();


app.get('/ip', function(request, response) {
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});