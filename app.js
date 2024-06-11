const express = require('express');
const cors = require('cors');

const UsuariosController = require('./controllers/UsuariosController');
const MetaFinancieraController = require('./controllers/MetaFinancieraController');
const TransaccionesController = require('./controllers/TransaccionesController');

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

// Rutas para metas financieras
app.get('/metaFinanciera/:usuario_id', MetaFinancieraController.getGoal);
app.post('/metaFinanciera', MetaFinancieraController.createOrUpdateGoal);
app.post('/metaFinanciera/updateSavings', MetaFinancieraController.updateSavings); // Asegúrate de que esta ruta esté definida

// Rutas para transacciones
app.get('/transacciones/:usuario_id/fecha/:fecha', TransaccionesController.getTransactionsByDate);
app.post('/transacciones', TransaccionesController.addTransaction); // Nueva ruta para agregar transacciones

app.listen(puerto, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

