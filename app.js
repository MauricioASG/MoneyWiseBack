const express = require('express');
const cors = require('cors');

const UsuariosController = require('./controllers/UsuariosController');

const app = express();
const puerto = 3050;

// Habilitar CORS
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Si funciona el back de moneywise :3');
});

// Rutas para usuarios
app.get('/usuarios', UsuariosController.indexGet);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
