// Declaração de Constantes
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.myxkemn.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Aplicação pode receber body tanto em formato de json como em urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Toda vez que receber uma requisição na rota files, utiliza o static para acessar os arquivos no caminho da pasta tmp
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

// Utilizando arquivo de rotas
app.use(require('./routes'));

// Execução da Aplicação na Porta 3333
app.listen(3333);