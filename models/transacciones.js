// models/transacciones.js
const db = require('../dbconnection');

class TransaccionesModel {
  static async obtenerPorFecha(usuario_id, fecha) {
    try {
      const transacciones = await db('Transacciones')
        .where({ usuario_id })
        .andWhereRaw('DATE(fecha) = ?', [fecha])
        .select('id', 'categoria_id', 'monto', 'tipo', 'fecha');
      return transacciones;
    } catch (error) {
      throw new Error(`Error al obtener transacciones por fecha: ${error.message}`);
    }
  }

  static async agregar(transaccion) {
    try {
      const result = await db('Transacciones').insert(transaccion);
      return result;
    } catch (error) {
      throw new Error(`Error al agregar transacción: ${error.message}`);
    }
  }

  static async actualizar(id, transaccion) {
    try {
      // Aseguramos que la fecha esté en el formato correcto
      const formattedDate = new Date(transaccion.fecha).toISOString().slice(0, 19).replace('T', ' ');
      transaccion.fecha = formattedDate;

      const result = await db('Transacciones').where({ id }).update(transaccion);
      return result;
    } catch (error) {
      throw new Error(`Error al actualizar transacción: ${error.message}`);
    }
  }

  static async eliminar(id) {
    try {
      const result = await db('Transacciones').where({ id }).del();
      return result;
    } catch (error) {
      throw new Error(`Error al eliminar transacción: ${error.message}`);
    }
  }
}

module.exports = TransaccionesModel;
