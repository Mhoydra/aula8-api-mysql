const conexao = require('../database/conexao') 

async function listarUsuarios(req,res){
    const usuario = await conexao.query(
        'SELECT * FROM usuarios'
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

async function criarUsuario(req,res){

};

async function atualizarUsuario(req,res){

};

async function deletarUsuario(req,res){
    
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};