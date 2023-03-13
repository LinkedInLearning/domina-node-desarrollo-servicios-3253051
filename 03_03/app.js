import express from 'express';
import ExcelJS from 'exceljs';

const app = express();

async function generarExcel() {
  const libro = new ExcelJS.Workbook();
  const hoja = libro.addWorksheet('Hoja 1');  
  hoja.columns = [
    { header: 'Nombre', key: 'nombre', width: 20 },
    { header: 'Email', key: 'email', width: 30 }
  ];  
  hoja.addRow({ nombre: 'Julia Rojas', email: 'julia.rojas@test.com' });  
  hoja.addRow({ nombre: 'Marco Monge', email: 'marco.monge@test.com' });  
  return libro.xlsx.writeBuffer();  
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