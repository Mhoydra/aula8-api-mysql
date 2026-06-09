const conexao = require('../database/conexao')

async function listarServicos(req,res){
    const { idServico } = req.params;
    const sql = `SELECT * FROM servicos`
    
    conexao.query(sql,[idServico], (err,result) => {
        if (err) {
            console.error(`Ocorreu erro ao encontrar os servicos`);
            res.status(500).json({
                erro:`Erro interno no servidor`
            });
        };

        if (result.affectedRows === 0) {
            return res.status(404).json({ 
                message: 'Servico não encontrado.' 
            });
        }

        return res.status(200).json({ 
            message: 'Servico deletado com sucesso!' 
        });
    });
};

async function criarServico(req,res){
    const {
        nomeServico,
        preco
    } = req.body;

    try {
        const sql = `
            INSERT INTO servicos
            (nomeServico,
            preco)
            VALUES (?,?,?)
        `;

        const resultado = await conexao.query(
            sql,[nomeServico,emailServico,senhaServico]
        );

        res.status(201).json({
            mensagem: 'Usuario criado com sucesso',
            id: resultado[0].insertId
        });

    } catch (erro) {

        console.log(erro);
        res.status(500).json({
            mensagem: 'Erro ao criar usuário'
        });
    };
};

async function atualizarServico(req,res){

};

async function deletarServico(req,res){
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
    listarServicos,
    criarServico,
    atualizarServico,
    deletarServico
}