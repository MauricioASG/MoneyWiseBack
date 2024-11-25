// controllers/TransaccionesController.js
const TransaccionesModel = require('../models/transacciones');

const getTransactionsByDate = async (req, res) => {
  try {
    const { usuario_id, fecha } = req.params;
    if (!fecha) {
      return res.status(400).send({ error: 'Fecha no proporcionada' });
    }
    const transactions = await TransaccionesModel.obtenerPorFecha(usuario_id, fecha);
    res.send(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send({ errno: 500, error: 'Error retrieving transactions by date' });
  }
};


const getTransactionsByMonth = async (req, res) => {
  try {
    const { usuario_id, year, month } = req.params;
    console.log(`Usuario ID: ${usuario_id}, Año: ${year}, Mes: ${month}`);

    const transactions = await TransaccionesModel.obtenerPorMes(usuario_id, year, month);

    console.log('Transacciones obtenidas:', transactions);

    res.send(transactions);
  } catch (error) {
    console.error('Error retrieving transactions by month:', error);
    res.status(500).send({ error: 'Error retrieving transactions by month' });
  }
};

const addTransaction = async (req, res) => {
  try {
    const { usuario_id, monto, tipo, categoria_id, fecha } = req.body;
    const transactionData = { usuario_id, monto, tipo, categoria_id, fecha };
    const result = await TransaccionesModel.agregar(transactionData);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ errno: 500, error: 'Error adding transaction' });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto, tipo, categoria_id, fecha } = req.body;
    const transactionData = { monto, tipo, categoria_id, fecha };
    const result = await TransaccionesModel.actualizar(id, transactionData);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ errno: 500, error: 'Error updating transaction' });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TransaccionesModel.eliminar(id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ errno: 500, error: 'Error deleting transaction' });
  }
};

const getTransactionsByCategory = async (req, res) => {
  try {
    const { usuario_id, categoria_id, year, month } = req.params;
    console.log(`Usuario ID: ${usuario_id}, Categoría ID: ${categoria_id}, Año: ${year}, Mes: ${month}`);

    const transactions = await TransaccionesModel.obtenerPorCategoria(usuario_id, categoria_id, year, month);

    console.log('Transacciones obtenidas:', transactions);

    res.send(transactions);
  } catch (error) {
    console.error('Error al obtener transacciones por categoría:', error);
    res.status(500).send({ error: 'Error al obtener transacciones por categoría' });
  }
};

module.exports = {
  getTransactionsByDate,
  getTransactionsByMonth,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionsByCategory,
};
