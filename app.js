import express from 'express';
//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()
const app = express();
const port = process.env.PUERTO || 3030;

app.get('/', (__, res) => {
  res.send('Aprendiendo express,ficha 3407181, ADSO EN EL SENA 23, 31 de julio');
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto: ${port}`); http:localhost:3030
});