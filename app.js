import express from 'express';
//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()


const app = express();
aprendices
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




const puerto = process.env.PUERTO || 3030

app.get('/', (__, res) => {
  res.send('Aprendiendo express,ficha 3407181, ADSO EN EL SENA 23, 31 de julio');
});
 commonjs
app.listen(port, () => {
  console.log(`SERVIDOR: http://localhost:${port}`);
});


app.get("/Otraruta", (req, res)=>{
  //usando template string
  res.send(`<h1>Otra ejemplo de ruta</h1>
    <h2>End point con res.send</h2>`)
  
})

app.get("/ruta2", (req, res) =>{
  res.json({"Nombre":"Angela", "Apellido": "Gaviria", "Cargo": "Aprendiz"})
})

app.get("/ruta3/:aprendiz/:otrodato", (req, res) =>{
  const dato_aprendiz = req.params.aprendiz
  const otro_dato = req.params.otrodato
  res.json({"Nombre": dato_aprendiz, "Otro": otro_dato})
})

app.get("/ruta4", (req, res) =>{
  //capturar el parametro de consulta query 
  const orden = req.query.orden || "sin ordenar"
  const pagina = req.query.pagina || 1
  res.send(`<h1>listado Aprendices</h1>
    <p> El listado esta en orden ${orden}</p>
    <p>Pagina: ${pagina}</p>
    `)
})


app.listen(puerto, function (){
  console.log(`SERVIDOR  ${puerto} http://localhost:3030/`);
});


