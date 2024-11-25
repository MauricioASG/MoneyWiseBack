const db = require('../dbconnection');

class RemindersController {
    static async addReminder(req, res) {
        try {
            const { usuario_id, title, description, date } = req.body;

            // Validar los datos enviados
            if (!usuario_id || !title || !description || !date) {
                return res.status(400).json({ error: 'Todos los campos son obligatorios' });
            }

            // Formatear la fecha para MySQL
            const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

            // Insertar el recordatorio en la base de datos
            const [newReminderId] = await db('Reminders').insert({
                usuario_id,
                title,
                description,
                date,
            });

            res.status(201).json({ id: newReminderId });
        } catch (error) {
            console.error('Error al crear el recordatorio:', error);
            res.status(500).json({ error: 'Error al crear el recordatorio' });
        }
    }

    static async getReminders(req, res) {
        try {
            const { usuario_id } = req.params;

            const reminders = await db('Reminders')
                .where({ usuario_id })
                .select('*');

            res.status(200).json(reminders);
        } catch (error) {
            console.error('Error al obtener los recordatorios:', error);
            res.status(500).json({ error: 'Error al obtener los recordatorios' });
        }
    }

    static async updateReminder(req, res) {
        try {
            const { id } = req.params;
            const { title, description, date } = req.body;

            await db('Reminders')
                .where({ id })
                .update({ title, description, date });

            res.status(200).json({ message: 'Recordatorio actualizado con éxito' });
        } catch (error) {
            console.error('Error al actualizar el recordatorio:', error);
            res.status(500).json({ error: 'Error al actualizar el recordatorio' });
        }
    }

    static async deleteReminder(req, res) {
        try {
            const { id } = req.params;

            await db('Reminders')
                .where({ id })
                .del();

            res.status(200).json({ message: 'Recordatorio eliminado con éxito' });
        } catch (error) {
            console.error('Error al eliminar el recordatorio:', error);
            res.status(500).json({ error: 'Error al eliminar el recordatorio' });
        }
    }
}

module.exports = RemindersController;
