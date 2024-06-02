const db = require('../dbconnection');

class MetaFinancieraModel {
  static async consultarPorUsuarioId(usuario_id) {
    try {
      const metas = await db.select('*').from('MetaFinanciera').where('usuario_id', usuario_id);
      return metas;
    } catch (error) {
      throw new Error(`Error al consultar metas financieras: ${error.message}`);
    }
  }

  static async crear(usuario_id, monto, periodo, ahorro_programado) {
    try {
      await db('MetaFinanciera').insert({ usuario_id, monto, periodo, ahorro_programado });
    } catch (error) {
      throw new Error(`Error al crear meta financiera: ${error.message}`);
    }
  }

  static async actualizar(id, monto, periodo, ahorro_programado) {
    try {
      await db('MetaFinanciera').where('id', id).update({ monto, periodo, ahorro_programado });
    } catch (error) {
      throw new Error(`Error al actualizar meta financiera: ${error.message}`);
    }
  }
}

module.exports = MetaFinancieraModel;
