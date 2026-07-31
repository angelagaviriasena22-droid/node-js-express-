import express from 'express';
//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()


const app = express();
const puerto = process.env.PUERTO || 3030

app.get('/', (__, res) => {
  res.send('Aprendiendo express,ficha 3407181, ADSO EN EL SENA 23, 31 de julio');
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
