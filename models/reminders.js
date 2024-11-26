const db = require('../dbconnection');

class RemindersModel {
  static async agregar(recordatorio) {
    try {
      const formattedDate = new Date(recordatorio.date).toISOString().slice(0, 19).replace('T', ' ');
      recordatorio.date = formattedDate;

      const [id] = await db('Reminders').insert(recordatorio);
      return id;
    } catch (error) {
      throw new Error(`Error al agregar recordatorio: ${error.message}`);
    }
  }

  static async obtener(usuario_id) {
    try {
      return await db('Reminders')
        .where({ usuario_id })
        .select('id', 'title', 'description', 'date');
    } catch (error) {
      throw new Error(`Error al obtener recordatorios: ${error.message}`);
    }
  }

  static async actualizar(id, recordatorio) {
    try {
      const formattedDate = new Date(recordatorio.date).toISOString().slice(0, 19).replace('T', ' ');
      recordatorio.date = formattedDate;

      const result = await db('Reminders').where({ id }).update(recordatorio);
      if (result === 0) {
        throw new Error('Recordatorio no encontrado.');
      }
      return result;
    } catch (error) {
      throw new Error(`Error al actualizar recordatorio: ${error.message}`);
    }
  }

  static async eliminar(id) {
    try {
      const result = await db('Reminders').where({ id }).del();
      if (result === 0) {
        throw new Error('Recordatorio no encontrado.');
      }
      return result;
    } catch (error) {
      throw new Error(`Error al eliminar recordatorio: ${error.message}`);
    }
  }
}

module.exports = RemindersModel;
