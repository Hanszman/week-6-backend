const mongoose = require('mongoose');

// Criação do Schema de File (Nos Bancos Não-Relacionais, os Schemas são como as Tabelas)
const File = new mongoose.Schema({
    // Campos do Schema
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Faz com que sejam criados os campos "Created_At" e "Updated_At" em cada registro do Schema
});

// Exportação
module.exports = mongoose.model('File', File);