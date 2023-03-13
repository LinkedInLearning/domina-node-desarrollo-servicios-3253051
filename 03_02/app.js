require('dotenv').config();
const express = require('express');
const redis = require('redis');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const app = express();
app.use(bodyParser.json());

const clienteRedis = redis.createClient({
  host: 'localhost',
  port: 6379,
  password: '123Queso.'
});

function generarTokenJWT(usuario, id) {
  const payload = {
    id,
    nombre: usuario.nombre,
    email: usuario.email
  };
  const opciones = {
    expiresIn: '1h'
  };
  return jwt.sign(payload, process.env.LLAVE_SECRETA, opciones);
}

app.post('/login', async (request, response) => {
  const id = uuid.v4();
  const token = generarTokenJWT(request.body, id);

  await clienteRedis.connect();
  await clienteRedis.set(id, token, {
    EX: 1000,
    NX: true
  });
  clienteRedis.quit();

  response.json({ token });
});

app.post('/logout', async (request, response) => {
  const token = request.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, process.env.LLAVE_SECRETA);

  await clienteRedis.connect();
  await clienteRedis.del(payload.id);
  clienteRedis.quit();
  
  response.sendStatus(204);
});


async function autenticarUsuario(request, response, next) {
  try {
    const token = request.headers?.authorization?.split(' ')[1];
    const payload = jwt.verify(token, process.env.LLAVE_SECRETA);

    await clienteRedis.connect();
    const tokenRedis = await clienteRedis.exists(payload.id);
    clienteRedis.quit();

    if (tokenRedis === 1) {
      next();
    } else {
      response.status(401).json({ mensaje: 'Error de autenticación' });
    }    
  } catch (err) {
    response.status(401).json({ mensaje: 'Error de autenticación' });
  }
}

app.get('/acceso', autenticarUsuario, (request, response) => {
  response.json({ message: 'Tiene acceso a la aplicación.' });
});


app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});