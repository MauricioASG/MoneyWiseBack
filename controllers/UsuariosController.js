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
      
}


module.exports = UsuariosController;
