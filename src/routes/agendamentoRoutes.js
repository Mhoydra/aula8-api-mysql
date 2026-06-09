const express = require('express');
const router = express.Router();

const { 
    listarAgendamentos, 
    criarAgendamento,
    atualizarAgendamento,
    deletarAgendamento
} = require('../controllers/agendamentoController');

router.get('/', listarAgendamentos);
router.post('/', criarAgendamento);
router.put('/', atualizarAgendamento);
router.delete('/', deletarAgendamento);

module.exports = router
