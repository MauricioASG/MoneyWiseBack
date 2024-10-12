
// /controllers/UsuariosController.js
const UsuariosModel = require('../models/usuarios');

class UsuariosController {
    static async indexGet(req, res) {
        try {
            const data = await UsuariosModel.consultar();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async register(req, res) {
        try {
            const { nombre, email, passw, salario } = req.body;

            const result = await UsuariosModel.crear({ nombre, email, passw, salario });
            res.status(201).json({ id: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Error creating user' });
        }
    }

    static async login(req, res) {
        try {
            const { email, passw } = req.body;

            const users = await UsuariosModel.consultarPorEmail(email);
            if (users.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            const user = users[0];
            if (passw !== user.passw) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            res.status(200).json({ id: user.id, nombre: user.nombre });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    // Mueve esta función dentro de la clase
    static async updateUser(req, res) {
        try {
            const { nombre, email, salario } = req.body;
            const { id } = req.params;

            await UsuariosModel.actualizar(id, { nombre, email, salario });
            res.status(200).send({ message: 'Datos actualizados con éxito' });
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            res.status(500).send({ errno: 500, error: 'Error al actualizar el usuario' });
        }
    }

    static async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await UsuariosModel.consultarPorId(id); // Función que obtiene el usuario por ID
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            res.status(500).send({ error: 'Error al obtener el usuario' });
        }
    }

    static async updateUser(req, res) {
        try {
          const { nombre, email, salario } = req.body;
          const { id } = req.params;
    
          await UsuariosModel.actualizar(id, { nombre, email, salario });
          res.status(200).send({ message: 'Datos actualizados con éxito' });
        } catch (error) {
          console.error('Error al actualizar el usuario:', error);
          res.status(500).send({ errno: 500, error: 'Error al actualizar el usuario' });
        }
      }
    }


module.exports = UsuariosController;
