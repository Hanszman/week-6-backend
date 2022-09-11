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
    timestamps: true, // Faz com que sejam criados os campos "Created_At" e "Updated_At" em cada registro do Schema
    toObject: { virtuals: true }, // Serve para converter automaticamente a informação do arquivo virtual para objeto
    toJSON: { virtuals: true }, // Serve para converter automaticamente a informação do arquivo virtual para JSON
});

// Campo Virtual: serve para retornar para o frontend uma url que redireciona para o arquivo salvo
File.virtual('url').get(function() { // O campo virtual não existe no banco de dados, porém ele existe no lado do backend
    const url = proccess.env.URL || 'http://localhost:3333';
    return `${url}/files/${encodeURIComponent(this.path)}`;
});

// Exportação
module.exports = mongoose.model('File', File);