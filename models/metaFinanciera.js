const db = require('../dbconnection'); // Importar la conexión de la base de datos

class MetaFinancieraModel {
  static async consultarPorUsuarioId(usuario_id) {
    try {
      const result = await db('MetaFinanciera').where({ usuario_id }).select('*');
      console.log('Meta financiera consultada:', result); // Agrega un mensaje de consola para ver los datos recuperados
      return result;
    } catch (error) {
      throw new Error(`Error al consultar meta financiera: ${error.message}`);
    }
  }

  static async crear(meta) {
    try {
      const result = await db('MetaFinanciera').insert(meta);
      return result;
    } catch (error) {
      throw new Error(`Error al crear meta financiera: ${error.message}`);
    }
  }

  static async actualizar(id, meta) {
    try {
      console.log('Actualizando meta financiera:', meta); // Agregar mensaje para ver qué datos se están guardando
      const result = await db('MetaFinanciera').where({ id }).update({
        monto: meta.monto,
        periodo: meta.periodo,
        ahorro_programado: meta.ahorro_programado,
        fecha_limite: meta.fecha_limite || meta.timePeriod, // Guarda la fecha límite correctamente
      });
      console.log('Meta financiera actualizada correctamente en la BD');
      return result;
    } catch (error) {
      console.error('Error al actualizar la meta financiera:', error);
      throw new Error(`Error al actualizar meta financiera: ${error.message}`);
    }
  }

  static async actualizarAhorroActual(id, ahorro_actual) {
    try {
      // Asegúrate de que tanto el id como el ahorro_actual sean válidos antes de ejecutar la consulta
      if (!id || ahorro_actual === undefined) {
        throw new Error('ID o ahorro actual no definidos');
      }

      const result = await db('MetaFinanciera')
        .where({ id })  // Asegúrate de que el id sea pasado correctamente aquí
        .update({ ahorro_actual });

      return result;
    } catch (error) {
      throw new Error(`Error al actualizar ahorro actual: ${error.message}`);
    }
  }
}

// ¡Aquí faltaba la llave de cierre!
module.exports = MetaFinancieraModel;

