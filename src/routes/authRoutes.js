const express = require('express');
const router = express.Router();

const {
    testeLoginUsuario
} = require('../controllers/authController')

router.post('/',testeLoginUsuario);

module.exports = router