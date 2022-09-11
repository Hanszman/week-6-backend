// Declaração de Constantes
const multer = require('multer');
const multerConfig = require('./config/multer');
const express = require('express');
const routes = express.Router();
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

// Rotas
routes.get('/teste', (req, res) => { // Rota de Teste
    return res.send('Hello Rocket!');
});

routes.post('/boxes', BoxController.store); // Rota de Store do Boxes
routes.post('/files', // Rota de Store do Files
    multer(multerConfig).single('file'), // Passando apenas um arquivo por vez com o single
    FileController.store
);

// Exportação
module.exports = routes;