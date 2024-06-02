// /controlles/UsuariosControlle.js
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
}

module.exports = UsuariosController;

