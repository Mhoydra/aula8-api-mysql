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
    const { id } = req.params;
    const sql = 'DELETE FROM usuarios WHERE id = ?';

    conexao.query(sql, [id], (err,result) => {
        if (err) {
            console.error('Erro ao deletar usuario',err)
            return res.status(500).json({
                erro: "Erro interno no servidor"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ 
                message: 'Usuário não encontrado.' 
            });
        }

        return res.status(200).json({ 
            message: 'Usuário deletado com sucesso!' 
        });
    });
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};