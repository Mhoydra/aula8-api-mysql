const conexao = require('../database/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function testeLoginUsuario(req,res){
    const { emailUsuario, senhaCripto } = req.body;

    if (!emailUsuario || !senhaCripto) {
        return res.status(400).json({
            mensagem: 'E-mail e senha são obrigatórios.'
        });
    }

    try {
        const [usuarios] = await conexao.query(
            'SELECT * FROM usuarios WHERE emailUsuario = ?', 
            [emailUsuario]
        );

        if (!usuarios || usuarios.length === 0) {
            return res.status(401).json({
                mensagem: 'E-mail ou senha incorretos.'
            });
        }

        const usuario = usuarios[0];

        const senhaCorreta = await bcrypt.compare(senhaCripto, usuario.senhaUsuario);

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: 'E-mail ou senha incorretos.'
            });
        }

        const token = jwt.sign(
            {
                id: usuario.idUsuario,
                nome: usuario.idUsuario,
                email: usuario.emailUsuario
            }
            ,process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        res.status(200).json({
            mensagem: 'Login realizado com sucesso!',
            token,
            usuario: {
                id: usuario.idUsuario,
                nome: usuario.nomeUsuario,
                email: usuario.emailUsuario
            }
        });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao tentar realizar o login.'
        });
    }
};

module.exports = {testeLoginUsuario}