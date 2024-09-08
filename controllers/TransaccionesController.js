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

    // Nueva función para obtener transacciones de un mes específico
    static async getTransactionsByMonth(req, res) {
      try {
        const { usuario_id, year, month } = req.params;
        
        // Verifica que los parámetros se reciban correctamente
        console.log(`Usuario ID: ${usuario_id}, Año: ${year}, Mes: ${month}`);
  
        const transactions = await TransaccionesModel.obtenerPorMes(usuario_id, year, month);
        
        // Agrega un log para ver qué datos se están obteniendo
        console.log('Transacciones obtenidas:', transactions);
  
        res.send(transactions);
      } catch (error) {
        console.error('Error retrieving transactions by month:', error);
        res.status(500).send({ error: 'Error retrieving transactions by month' });
      }
    }

    static async addTransaction(req, res) {
      try {
        const { usuario_id, monto, tipo, categoria_id, fecha } = req.body; // Asegúrate de recibir categoria_id
        const transactionData = { usuario_id, monto, tipo, categoria_id, fecha }; // Usa el categoria_id recibido
        const result = await TransaccionesModel.agregar(transactionData);
        res.status(201).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ errno: 500, error: 'Error adding transaction' });
      }
    }
    

    static async updateTransaction(req, res) {
      try {
        const { id } = req.params;
        const { monto, tipo, categoria_id, fecha } = req.body; // Asegúrate de recibir categoria_id correctamente
        const transactionData = { monto, tipo, categoria_id, fecha };
        const result = await TransaccionesModel.actualizar(id, transactionData);
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ errno: 500, error: 'Error updating transaction' });
      }
    }
    

  static async deleteTransaction(req, res) {
    try {
      const { id } = req.params;
      const result = await TransaccionesModel.eliminar(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Error deleting transaction' });
    }
  }
}

module.exports = TransaccionesController;
