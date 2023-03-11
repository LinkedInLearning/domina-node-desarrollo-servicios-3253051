import bodyParser from 'body-parser';
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(bodyParser.json());
const llaveSecreta = 'miClaveSecreta';

app.post('/login', (request, response) => {
  const usuario = request.body.usuario;
  const contrasena = request.body.contrasena;

  if (usuario === 'usuario' && contrasena === 'contraseña') {
    const token = jwt.sign({ usuario }, llaveSecreta);
    response.json({ token });
  } else {
    response.status(401).send('Credenciales inválidas');
  }
});

app.get('/acceso', (request, response) => {
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});