// Declaração de Constantes
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.myxkemn.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Aplicação pode receber body tanto em formato de json como em urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilizando arquivo de rotas
app.use(require('./routes'));

// Execução da Aplicação na Porta 3333
app.listen(3333);