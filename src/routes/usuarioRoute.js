const { listarUsuarios } = require('../controllers/usuarioController');
const { app } = require('../server')

app.get('/usuarios', listarUsuarios)