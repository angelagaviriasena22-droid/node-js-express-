require("dotenv").config();
const express = require("express");
const pool = require("./database/db"); // <--- Importamos la conexión a PostgreSQL

const miApp = express();

//mi aplicacion utiliza los middleware
miApp.use(express.json()); // <--- Con sus paréntesis corregidos
miApp.use(express.urlencoded({ extended: true }));
//importar middleware propios

// --- RUTA DE PRUEBA PARA POSTGRESQL ---
miApp.get("/test-db", async (req, res) => {
  try {
    const resultado = await pool.query('SELECT NOW()');
    res.json({
      mensaje: "¡Conexión a PostgreSQL exitosa desde tu API!",
      fecha_base_datos: resultado.rows[0].now
    });
  } catch (error) {
    console.error("Error al consultar la base de datos:", error);
    res.status(500).json({ error: "No se pudo conectar a la base de datos" });
  }
});
// ---------------------------------------

miApp.get("/", (req, res)=>{
    res.send("MI API rest ficha 3407181.")
})

module.exports = miApp;
