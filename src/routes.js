// Declaração de Constantes
const express = require('express');
const routes = express.Router();
const BoxController = require('./controllers/BoxController');

// Rotas
routes.get('/teste', (req, res) => {
    return res.send('Hello Rocket!');
});

routes.post('/boxes', BoxController.store);

// Exportação
module.exports = routes;