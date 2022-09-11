const express = require('express');
const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.send('Hello World');
});

module.exports = routes;