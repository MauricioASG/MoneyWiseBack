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
}

module.exports = TransaccionesModel;
