const express = require("express");
const app = express();
require("dotenv/config");

const puerto = process.env.PUERTO || 3000;

// Configurar para la lectura del archivo
const sistemaArchivo = require("fs");
const ruta = require("path");
const rutaArchivoJson = ruta.join(__dirname, "datos.json");
//importar libreria para subir archivos 
const multer = require("multer");

// Middleware para formatear los datos en JSON (¡con paréntesis!)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Endpoint raíz
app.get("/", function(req, res){
  res.send("API Rest - Aprendices");
});

// Endpoint para ver los datos del archivo
app.get("/api/aprendices", (req, res) => {
  sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
    if (error) {
      return res.status(500).json({ Error: "No se puede leer los datos" });
    }
    const ListaAprendices = JSON.parse(datos);
    res.json(ListaAprendices);
  });
});

// Endpoint para agregar un aprendiz (unificado)
app.post("/api/aprendices", (req, res) => {
  const nuevoAprendiz = req.body;

  sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
    if (error) {
      return res.status(500).json({ Error: "No se puede leer los datos" });
    }

    const ListaAprendices = JSON.parse(datos);
    ListaAprendices.push(nuevoAprendiz);

    // Guardar los datos actualizados
    sistemaArchivo.writeFile(rutaArchivoJson, JSON.stringify(ListaAprendices, null, 2), (error) => {
      if (error) {
        return res.status(500).json({ Error: "No se puede registrar el nuevo aprendiz" });
      }
      res.status(201).json({ mensaje: "Aprendiz creado con éxito" });
    });
  });
});

app.listen(puerto, () => {
  console.log(`Servidor en funcionamiento en el puerto: http://localhost:${puerto}`);
});