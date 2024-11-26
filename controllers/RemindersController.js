const db = require('../dbconnection');

// Crear un nuevo recordatorio
const addReminder = async (req, res) => {
  try {
    const { usuario_id, title, description, date } = req.body;

    if (!usuario_id || !title || !description || !date) {
      return res.status(400).send({ error: 'Todos los campos son requeridos.' });
    }

    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

    const [id] = await db('Reminders').insert({
      usuario_id,
      title,
      description,
      date: formattedDate,
    });

    res.status(201).json({ id });
  } catch (error) {
    console.error('Error al crear el recordatorio:', error);
    res.status(500).send({ error: 'Error al crear el recordatorio.' });
  }
};

// Obtener recordatorios por usuario
const getReminders = async (req, res) => {
  try {
    const { usuario_id } = req.params;

    if (!usuario_id) {
      return res.status(400).send({ error: 'El usuario_id es requerido.' });
    }

    const reminders = await db('Reminders')
      .where({ usuario_id })
      .select('id', 'title', 'description', 'date');

    res.send(reminders);
  } catch (error) {
    console.error('Error al obtener los recordatorios:', error);
    res.status(500).send({ error: 'Error al obtener los recordatorios.' });
  }
};

// Actualizar un recordatorio
const updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date } = req.body;

    if (!title || !description || !date) {
      return res.status(400).send({ error: 'Todos los campos son requeridos.' });
    }

    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

    const result = await db('Reminders')
      .where({ id })
      .update({ title, description, date: formattedDate });

    if (result === 0) {
      return res.status(404).send({ error: 'Recordatorio no encontrado.' });
    }

    res.status(200).json({ message: 'Recordatorio actualizado correctamente.' });
  } catch (error) {
    console.error('Error al actualizar el recordatorio:', error);
    res.status(500).send({ error: 'Error al actualizar el recordatorio.' });
  }
};

// Eliminar un recordatorio
const deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db('Reminders').where({ id }).del();

    if (result === 0) {
      return res.status(404).send({ error: 'Recordatorio no encontrado.' });
    }

    res.status(200).json({ message: 'Recordatorio eliminado correctamente.' });
  } catch (error) {
    console.error('Error al eliminar el recordatorio:', error);
    res.status(500).send({ error: 'Error al eliminar el recordatorio.' });
  }
};

module.exports = {
  addReminder,
  getReminders,
  updateReminder,
  deleteReminder,
};
