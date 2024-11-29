const express = require('express');
const cors = require('cors');

const UsuariosController = require('./controllers/UsuariosController');
const MetaFinancieraController = require('./controllers/MetaFinancieraController');
const TransaccionesController = require('./controllers/TransaccionesController');
const RemindersController = require('./controllers/RemindersController');

const app = express();
const puerto = 3050;
const db = require('./dbconnection');


// Ruta para probar la conexión a la base de datos
app.get('/testConnection', async (req, res) => {
  try {
    const result = await db.raw('SELECT 1+1 AS result');
    res.status(200).json({ success: true, result: result[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// app.use(cors());

//Aqui debemos tener la dirección ip de nuestra computadora local
app.use(cors({
  origin: '*', // IP de tu servidor local COLILAP
  // origin: 'http://192.168.137.1', // IP de tu servidor local ASUS
  credentials: true,
}));



app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Si funciona el back de moneywise :3');
});

// Rutas para usuarios
app.get('/usuarios', UsuariosController.indexGet);
// Ruta para obtener los detalles del usuario
app.get('/usuarios/:id', UsuariosController.getUser);
app.post('/auth/register', UsuariosController.register);
app.post('/auth/login', UsuariosController.login);
app.put('/usuarios/:id', UsuariosController.updateUser);


// Rutas para metas financieras
app.get('/metaFinanciera/:usuario_id', MetaFinancieraController.getGoal);
app.post('/metaFinanciera', MetaFinancieraController.createOrUpdateGoal);
app.post('/metaFinanciera/updateSavings', MetaFinancieraController.updateSavings);


// Rutas para transacciones
app.get('/transacciones/:usuario_id/fecha/:fecha', TransaccionesController.getTransactionsByDate);
app.post('/transacciones', TransaccionesController.addTransaction); // Nueva ruta para agregar transacciones
app.put('/transacciones/:id', TransaccionesController.updateTransaction);
app.delete('/transacciones/:id', TransaccionesController.deleteTransaction);
app.get('/transacciones/:usuario_id/categoria/:categoria_id/mes/:year/:month', TransaccionesController.getTransactionsByCategory);

// server.js
app.get('/transacciones/:usuario_id/mes/:year/:month', TransaccionesController.getTransactionsByMonth);


app.listen(puerto, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

// Rutas para recordatorios
app.post('/reminders', RemindersController.addReminder);
app.get('/reminders/:usuario_id', RemindersController.getReminders);
app.put('/reminders/:id', RemindersController.updateReminder);
app.delete('/reminders/:id', RemindersController.deleteReminder);
