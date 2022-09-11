// Declaração de Constantes
const File = require('../models/File');

// Classe do Controller
class FileController {
    async store (req, res) {
        // Criação de um File
        console.log(req.file);
        return res.send('OK');
    }
}

// Exportação
module.exports = new FileController();