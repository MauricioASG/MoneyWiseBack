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

}

module.exports = UsuariosModel;
