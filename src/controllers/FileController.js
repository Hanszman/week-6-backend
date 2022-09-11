// Declaração de Constantes
const Box = require('../models/Box');
const File = require('../models/File');

// Classe do Controller
class FileController {
    // Criação de um File
    async store (req, res) {
        const box = await Box.findById(req.params.id);
        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key
        });
        box.files.push(file);
        await box.save();
        req.io.sockets.in(box._id).emit('file', file); // Todos os usuários que estão conectados nessa box com esse id recebem os dados desse arquivo
        return res.json(file);
    }
}

// Exportação
module.exports = new FileController();