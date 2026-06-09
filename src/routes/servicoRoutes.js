const express = require('express');
const router = express.Router();

const { 
    listarServicos, 
    criarServico, 
    atualizarServico, 
    deletarServico 
} = require('../controllers/servicoController');

router.get('/',listarServicos);
router.post('/',criarServico);
router.put('/:idServico',atualizarServico);
router.delete('/:idServico',deletarServico);

module.exports = router