const express = require("express")
const app = express()
require("dotenv/config")
const puerto = process.env.PUERTO || 3000
//configurar para la lectura del archivo
const sistemaArchivo = require("fs")
const ruta = require("path")
const rutaArchivoJson = ruta.join(__dirname, "datos.json")

//endpoint raiz
app.get("/", function(req, res){
  res.send(`API Rest - Aprendices`);
})

//endpoint para ver los datos del archivo
app.get("/api/aprendices", (req, res) => {
  //datos vienen del archivo
  sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos)=>{
    if(error){
      return res.json({Error: "No se puede leer los datos"})
    }
    const ListaAprendices = JSON.parse(datos)
    res.json(ListaAprendices)
  })
})
//
app.post("/api/aprendices", (req, res) => {
  const nuevoAprendiz = req.body
  //datos vienen del archivo
  sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos)=>{
    if(error){
      return res.json({Error: "No se puede leer los datos"})
    }
    const ListaAprendices = JSON.parse(datos)
    //agregar el nuevo aprendiz
    ListaAprendices.push(nuevoAprendiz)
    //escribir el nuevo archivo
    sistemaArchivo.writeFile(rutaArchivoJson, JSON.stringify(ListaAprendices), null, 2, (error) =>{
      if(error){
        res.status(500).json({Error: "No se puede registrar el n uevo aprendiz"})
      }
    })
  })
})

app.post("/api/aprendices", (req, res) =>{
    res.status(201).json({mensaje: "aprendiz creado con exito"})
})


app.listen(puerto, () => {
  console.log(`Servidor en funcionamiento en el puerto: http://localhost:${puerto}`);
});