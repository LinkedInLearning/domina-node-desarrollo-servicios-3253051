const express = require('express');
const ejs = require('ejs');
const app = express();

app.use((request, response, next) => {
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});