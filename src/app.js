const express = require('express'); // esse require o express
const app = express(); // esse faz variavel de express

const usuarioRoutes = require('./routes/usuarioRoutes'); // contato o route do usuario
const servicoRoutes = require('./routes/servicoRoutes');
const authRoutes = require('./routes/authRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

app.use(express.json()); // permite o uso de json com http
app.use(express.static('public'));

app.use('/usuario', usuarioRoutes);
app.use('/auth', authRoutes);
app.use('/servico', servicoRoutes);
app.use('/agendamento', agendamentoRoutes);

module.exports = app;