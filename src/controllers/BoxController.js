// Declaração de Constantes
const Box = require('../models/Box');

// Classe do Controller
class BoxController {
    // Criação de uma Box
    async store (req, res) {
        const box = await Box.create({ title: req.body.title });
        return res.json(box);
    }

    // Visualização de uma Box e seus Files
    async show (req, res) {
        const box = await Box.findById(req.params.id).populate({ // O populate serve para não retornar apenas o id dos files, como também os outros campos deles
            path: 'files',
            options: { sort: { createdAt : -1 } } // Ordenação pela data de criação, -1 é decrescente, do mais recente para o mais antigo
        });
        return res.json(box);
    }
}

// Exportação
module.exports = new BoxController();