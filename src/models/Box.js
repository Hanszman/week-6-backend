// Declaração de Constantes
const mongoose = require('mongoose');

// Criação do Schema de Box (Nos Bancos Não-Relacionais, os Schemas são como as Tabelas)
const Box = new mongoose.Schema({
    // Campos do Schema
    title: {
        type: String,
        required: true
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }] // Array do tipo File
}, {
    timestamps: true // Faz com que sejam criados os campos "Created_At" e "Updated_At" em cada registro do Schema
});

// Exportação
module.exports = mongoose.model('Box', Box);