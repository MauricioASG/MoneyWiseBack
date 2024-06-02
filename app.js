const express = require('express');
const cors = require('cors');

const UsuariosController = require('./controllers/UsuariosController');

const app = express();
const puerto = 3050;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Si funciona el back de moneywise :3');
});

// Rutas para usuarios
app.get('/usuarios', UsuariosController.indexGet);
app.post('/auth/register', UsuariosController.register);
app.post('/auth/login', UsuariosController.login);

app.listen(puerto, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

