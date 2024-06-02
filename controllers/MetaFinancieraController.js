const MetaFinancieraModel = require('../models/metaFinanciera');

class MetaFinancieraController {
    static async crearMeta(req, res) {
        try {
            const { usuario_id, monto, periodo, ahorro_programado } = req.body;
            const result = await MetaFinancieraModel.crear({ usuario_id, monto, periodo, ahorro_programado });
            res.status(201).json({ id: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Error al crear meta financiera' });
        }
    }

    static async obtenerMeta(req, res) {
        try {
            const { usuario_id } = req.params;
            const data = await MetaFinancieraModel.consultarPorUsuario(usuario_id);
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Error al consultar meta financiera' });
        }
    }

    static async actualizarMeta(req, res) {
        try {
            const { id, monto, periodo, ahorro_programado } = req.body;
            await MetaFinancieraModel.actualizar(id, { monto, periodo, ahorro_programado });
            res.status(200).send({ message: 'Meta financiera actualizada' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Error al actualizar meta financiera' });
        }
    }

    static async eliminarMeta(req, res) {
        try {
            const { id } = req.params;
            await MetaFinancieraModel.eliminar(id);
            res.status(200).send({ message: 'Meta financiera eliminada' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Error al eliminar meta financiera' });
        }
    }
}

module.exports = MetaFinancieraController;
