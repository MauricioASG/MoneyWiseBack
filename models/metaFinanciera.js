// models/metafinanciera.js
const db = require('../dbconnection');

class MetaFinancieraModel {
  static async consultarPorUsuarioId(usuario_id) {
    try {
      return await db('MetaFinanciera').where({ usuario_id });
    } catch (error) {
      throw new Error(`Error al consultar meta financiera: ${error.message}`);
    }
  }

  static async crear(meta) {
    try {
      return await db('MetaFinanciera').insert(meta);
    } catch (error) {
      throw new Error(`Error al crear meta financiera: ${error.message}`);
    }
  }

  static async actualizar(id, meta) {
    try {
      return await db('MetaFinanciera').where({ id }).update(meta);
    } catch (error) {
      throw new Error(`Error al actualizar meta financiera: ${error.message}`);
    }
  }
}

module.exports = MetaFinancieraModel;
