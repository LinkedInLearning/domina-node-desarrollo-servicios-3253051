import jwt from 'jsonwebtoken';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

app.post('/login', (request, response) => {

});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});