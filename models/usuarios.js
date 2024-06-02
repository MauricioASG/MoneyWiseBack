// models/usuarios.js
const db = require('../dbconnection');

class UsuariosModel {
    static async consultar() {
        try {
            const usuarios = await db.select('*').from('Usuario');
            return usuarios;
        } catch (error) {
            throw new Error(`Error al consultar usuarios: ${error.message}`);
        }
    }

    static async crear(usuario) {
        try {
            const result = await db('Usuario').insert(usuario);
            return result;
        } catch (error) {
            throw new Error(`Error al crear usuario: ${error.message}`);
        }
    }

    static async consultarPorEmail(email) {
        try {
            const usuarios = await db('Usuario').where({ email }).select('*');
            return usuarios;
        } catch (error) {
            throw new Error(`Error al consultar usuario por email: ${error.message}`);
        }
    }
}

module.exports = UsuariosModel;
