const MetaFinancieraModel = require('../models/metaFinanciera');

class MetaFinancieraController {
  static async getGoal(req, res) {
    const { usuario_id } = req.params;
    try {
      const data = await MetaFinancieraModel.consultarPorUsuarioId(usuario_id);
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Internal Server Error' });
    }
  }

  static async createOrUpdateGoal(req, res) {
    const { usuario_id, monto, periodo, ahorro_programado } = req.body;
    try {
      const existingGoal = await MetaFinancieraModel.consultarPorUsuarioId(usuario_id);
      if (existingGoal.length > 0) {
        await MetaFinancieraModel.actualizar(existingGoal[0].id, monto, periodo, ahorro_programado);
      } else {
        await MetaFinancieraModel.crear(usuario_id, monto, periodo, ahorro_programado);
      }
      res.status(200).send({ message: 'Meta financiera guardada con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ errno: 500, error: 'Internal Server Error' });
    }
  }
}

module.exports = MetaFinancieraController;
