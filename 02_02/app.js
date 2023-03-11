import express from 'express';
import  router from './routes/usuario.js';
const app = express();
app.use(express.json());

app.use('/usuario', router);

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});