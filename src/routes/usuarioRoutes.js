const express = require('express');
const router = express.Router();

const { 
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
} = require('../controllers/usuarioController');

router.get('/', listarUsuarios);
router.post('/', criarUsuario);
router.put('/:idUsuario', atualizarUsuario);
router.delete('/:idUsuario', deletarUsuario);

module.exports = router;
