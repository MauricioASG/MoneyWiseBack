const db = require('../dbconnection');

class RemindersModel {
    static async crear(reminder) {
        try {
            const result = await db('Reminders').insert(reminder);
            return result;
        } catch (error) {
            throw new Error(`Error al crear recordatorio: ${error.message}`);
        }
    }

    static async obtenerPorUsuario(usuario_id) {
        try {
            const reminders = await db('Reminders').where({ usuario_id }).select('*');
            return reminders;
        } catch (error) {
            throw new Error(`Error al obtener recordatorios: ${error.message}`);
        }
    }

    static async actualizar(id, data) {
        try {
            const result = await db('Reminders').where({ id }).update(data);
            return result;
        } catch (error) {
            throw new Error(`Error al actualizar recordatorio: ${error.message}`);
        }
    }

    static async eliminar(id) {
        try {
            const result = await db('Reminders').where({ id }).del();
            return result;
        } catch (error) {
            throw new Error(`Error al eliminar recordatorio: ${error.message}`);
        }
    }
}

module.exports = RemindersModel;
