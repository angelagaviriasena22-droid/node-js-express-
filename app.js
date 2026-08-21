const express = require('express');
const app = express();
require("dotenv/config");
const port = process.env.PUERTO || 3000;
//configurar para la lectura del archivo 
const sistemaArchivo =require ("fs")
const ruta = require("path")
const rutaArchivo = ruta.join(__dirname, "datos.json") 
//endpoint para la ruta raiz
app.get('/', (req, res) => {
  res.send('API - Rest Aprendices');
});
//endpoint para ver los datos del archivo 
app.get("/api/aprendices", (req, res) => {
  //datos vienen del archivo 
  sistemaArchivo.readFile(rutaArchivo, "utf-8", (error, data) => {
    if (error) {
      return res.json({ error: "Error al leer el archivo" });
    }
    const listaAprendices = JSON.parse(data);
    res.json(listaAprendices);
  });

  app.listen(PUERTO, () => {
    console.log(`SERVIDOR http://localhost:${PUERTO}`);
  });
})



