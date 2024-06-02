const db = require('../dbconnection');

class MetaFinancieraModel {
    static async crear(meta) {
        try {
            const result = await db('MetaFinanciera').insert(meta);
            return result;
        } catch (error) {
            throw new Error(`Error al crear meta financiera: ${error.message}`);
        }
    }

    static async consultarPorUsuario(usuario_id) {
        try {
            const metas = await db('MetaFinanciera').where({ usuario_id }).select('*');
            return metas;
        } catch (error) {
            throw new Error(`Error al consultar meta financiera: ${error.message}`);
        }
    }

    static async actualizar(id, meta) {
        try {
            await db('MetaFinanciera').where({ id }).update(meta);
        } catch (error) {
            throw new Error(`Error al actualizar meta financiera: ${error.message}`);
        }
    }

    static async eliminar(id) {
        try {
            await db('MetaFinanciera').where({ id }).del();
        } catch (error) {
            throw new Error(`Error al eliminar meta financiera: ${error.message}`);
        }
    }
}

module.exports = MetaFinancieraModel;
