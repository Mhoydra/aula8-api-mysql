const express = require('express');
const router = express.Router();

const agendamentoController = require('../controllers/agendamentoController');
const autenticarToken = require('../middlewares/authMiddleware');

router.get('/', autenticarToken, agendamentoController.listarAgendamentos);
router.post('/', autenticarToken, agendamentoController.criarAgendamento);
router.put('/:idAgendamento', autenticarToken, agendamentoController.atualizarAgendamento);
router.delete('/:idAgendamento', autenticarToken, agendamentoController.deletarAgendamento);

module.exports = router
