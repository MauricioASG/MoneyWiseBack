const MetaFinancieraModel = require('../models/metaFinanciera');
class MetaFinancieraController {
  // Obtener la meta financiera por ID de usuario
  static async getGoal(req, res) {
    try {
      const { usuario_id } = req.params;
      const data = await MetaFinancieraModel.consultarPorUsuarioId(usuario_id);
      if (!data || data.length === 0) {
        return res.status(200).send([]);  // Enviar una respuesta vacía si no hay metas
      }
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Error retrieving goal' });
    }
  }


  // Crear o actualizar una meta financiera
  static async createOrUpdateGoal(req, res) {
    try {
      const { id, usuario_id, monto, periodo, ahorro_programado, timePeriod, fecha_limite, ahorro_actual } = req.body;
      const goalData = { usuario_id, monto, periodo, ahorro_programado, timePeriod, fecha_limite, ahorro_actual };
      let result;

      if (id) {
        result = await MetaFinancieraModel.actualizar(id, goalData);
      } else {
        result = await MetaFinancieraModel.crear(goalData);
      }

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Error creating or updating goal' });
    }
  }

  // Actualizar el ahorro actual
  // MetaFinancieraController.js
  static async updateSavings(req, res) {
    try {
      const { id, ahorro_actual } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Falta el id de la meta financiera' });
      }

      const result = await MetaFinancieraModel.actualizarAhorroActual(id, ahorro_actual);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error al actualizar el ahorro actual:', error);
      res.status(500).send({ errno: 500, error: 'Error updating savings' });
    }
  }
}

module.exports = MetaFinancieraController;
