//MetaFinancieraController.js
const MetaFinancieraModel = require('../models/metafinanciera');

class MetaFinancieraController {
  static async getGoal(req, res) {
    try {
      const { usuario_id } = req.params;
      const data = await MetaFinancieraModel.consultarPorUsuarioId(usuario_id);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Error retrieving goal' });
    }
  }

  static async createOrUpdateGoal(req, res) {
    try {
      const { id, usuario_id, monto, periodo, ahorro_programado, timePeriod } = req.body;
      const goalData = { usuario_id, monto, periodo, ahorro_programado, timePeriod };
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
}

module.exports = MetaFinancieraController;
