const express = require('express');
const router = express.Router();

const {testeLoginUsuario} = require('../controllers/authController');
const autenticarToken = require('../middlewares/authMiddleware');

// router.get('/perfil', authMiddleware, usuarioController.obterPerfil);
// router.put('/atualizar', authMiddleware, usuarioController.atualizarDados);

router.get('/', autenticarToken, (req,res) => {
    return res.status(200).json({
        mensagem: 'Usuario autenticado',
        usuario: req.usuario
    });
});

router.post('/', testeLoginUsuario);

module.exports = router
