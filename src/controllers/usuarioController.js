const conexao = require('../database/conexao') 

async function listarUsuarios(req,res){
    const usuario = await conexao.query(
        'SELECT * FROM usuarios WHERE nomeUuario = ?',
        [nomeUsuario]
    );

    try {

        console.log(usuario);
        res.json(usuario);

    } catch (erro) {

        console.error(erro);
        res.status(500).json({
            mensagem: `Erro ao buscar usuários`
        });
    };
};

module.exports = {
    listarUsuarios
}