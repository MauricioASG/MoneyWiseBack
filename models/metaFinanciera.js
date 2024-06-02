// models/metafinanciera.js
const db = require('../dbconnection');

class MetaFinancieraModel {
    static async getGoalByUserId(usuario_id) {
        try {
            const goal = await db('MetaFinanciera').where({ usuario_id }).select('*');
            return goal;
        } catch (error) {
            throw new Error(`Error retrieving financial goal: ${error.message}`);
        }
    }

    static async createGoal(goal) {
        try {
            const result = await db('MetaFinanciera').insert(goal);
            return result;
        } catch (error) {
            throw new Error(`Error creating financial goal: ${error.message}`);
        }
    }

    static async updateGoal(usuario_id, goal) {
        try {
            const result = await db('MetaFinanciera').where({ usuario_id }).update(goal);
            return result;
        } catch (error) {
            throw new Error(`Error updating financial goal: ${error.message}`);
        }
    }
}

module.exports = MetaFinancieraModel;
