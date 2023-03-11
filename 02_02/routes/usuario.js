import express from 'express';
const router = express.Router();

router.get('/usuario', (request, response) => {
  response.send('¡Bienvenido!');
});

router.get('/usuario/despedida', (request, response) => {
  response.send('¡Hasta luego!');
});

export default router;