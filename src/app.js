const express = require('express'); // esse require o express
const app = express(); // esse faz variavel de express

const usuarioRoutes = require('./routes/usuarioRoutes'); // contato o route do usuario

app.use(express.json()); // permite o uso de json com http

app.use('/usuario', usuarioRoutes); 

module.exports = app;