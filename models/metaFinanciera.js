// metaFinanciera.js
const db = require('../dbconnection');

class MetaFinancieraModel {
    static async consultarPorUsuarioId(usuario_id) {
        try {
            const result = await db('MetaFinanciera').where({ usuario_id }).select('*');
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
            const result = await db('MetaFinanciera').where({ id }).update(meta);
            return result;
        } catch (error) {
            throw new Error(`Error al actualizar meta financiera: ${error.message}`);
        }
    }

    static async actualizarAhorroActual(id, ahorro_actual) {
        try {
            const result = await db('MetaFinanciera').where({ id }).update({ ahorro_actual });
            return result;
        } catch (error) {
            throw new Error(`Error al actualizar ahorro actual: ${error.message}`);
        }
    }
}

module.exports = MetaFinancieraModel;


