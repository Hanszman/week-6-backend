// Declaração de Constantes
const Box = require('../models/Box');

// Classe do Controller
class BoxController {
    async store (req, res) {
        const box = await Box.create({ title: req.body.title });
        return res.json(box);
    }
}

// Exportação
module.exports = new BoxController();