// Declaração de Constantes
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.myxkemn.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Execução da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));
app.listen(3333);