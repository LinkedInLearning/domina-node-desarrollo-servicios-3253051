const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});