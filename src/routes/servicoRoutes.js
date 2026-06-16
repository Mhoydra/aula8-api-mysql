const express = require('express');
const router = express.Router();

const autenticarToken = require('../middlewares/authMiddleware');
const servicoController = require('../controllers/servicoController');

router.get('/', servicoController.listarServicos);
router.post('/', autenticarToken, servicoController.criarServico);
router.put('/:idServico', autenticarToken, servicoController.atualizarServico);
router.delete('/:idServico', autenticarToken, servicoController.deletarServico);

module.exports = router