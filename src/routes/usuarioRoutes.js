const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');
const autenticarToken = require('../middlewares/authMiddleware');

router.get('/', autenticarToken, usuarioController.listarUsuarios);
router.post('/', autenticarToken, usuarioController.criarUsuario);
router.put('/:idUsuario', autenticarToken, usuarioController.atualizarUsuario);
router.delete('/:idUsuario', autenticarToken,  usuarioController.deletarUsuario);

module.exports = router;
