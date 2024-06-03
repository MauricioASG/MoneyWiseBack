// controllers/TransaccionesController.js
const TransaccionesModel = require('../models/transacciones');

class TransaccionesController {
  static async getTransactionsByDate(req, res) {
    try {
      const { usuario_id, fecha } = req.params;
      const transactions = await TransaccionesModel.obtenerPorFecha(usuario_id, fecha);
      res.send(transactions);
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Error retrieving transactions by date' });
    }
  }

  static async addTransaction(req, res) {
    try {
      const { usuario_id, monto, tipo, categoria, fecha } = req.body;
      const transactionData = { usuario_id, monto, tipo, categoria_id: 1, fecha }; // Asigna una categoría temporal
      const result = await TransaccionesModel.agregar(transactionData);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Error adding transaction' });
    }
  }
}

module.exports = TransaccionesController;