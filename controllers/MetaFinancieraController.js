// controllers/MetaFinancieraController.js
const MetaFinancieraModel = require('../models/metafinanciera');

class MetaFinancieraController {
    static async getGoal(req, res) {
        try {
            const { usuario_id } = req.params;
            const goal = await MetaFinancieraModel.getGoalByUserId(usuario_id);
            res.status(200).json(goal);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Error retrieving financial goal' });
        }
    }

    static async createOrUpdateGoal(req, res) {
        try {
            const { usuario_id, monto, periodo, ahorro_programado } = req.body;
            const existingGoal = await MetaFinancieraModel.getGoalByUserId(usuario_id);

            if (existingGoal.length > 0) {
                await MetaFinancieraModel.updateGoal(usuario_id, { monto, periodo, ahorro_programado });
            } else {
                await MetaFinancieraModel.createGoal({ usuario_id, monto, periodo, ahorro_programado });
            }

            res.status(200).json({ message: 'Financial goal saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Error saving financial goal' });
        }
    }
}

module.exports = MetaFinancieraController;
