import express from 'express';
import ExcelJS from 'exceljs';

const app = express();

async function generarExcel() {
}

app.get('/excel', (request, response) => {
  response.setHeader('Content-Disposition', 'attachment; filename="mi_primer_excel.xlsx"');
  response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  generarExcel().then((libro) => {
    response.send(libro);
  });
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});