const conexao = require('../database/conexao');
const bcrypt = require('bcrypt');
const casas = 10;

async function listarUsuarios(req,res){
    const usuario = await conexao.query(
        `SELECT a.idAgendamento,
                u.nomeUsuario, 
                s.nomeServico, 
                s.preco, 
                a.dataAgendamento 
        FROM usuarios AS u 
        INNER JOIN agendamentos AS a 
            ON a.FKidUsuario = u.idUsuario 
        INNER JOIN servicos AS s 
            ON a.FKidServico = s.idServico`
    ); // fazer com id

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
    const {
        nomeUsuario,
        emailUsuario,
        senhaOriginal
    } = req.body;

    try {
        const senhaUsuario = await bcrypt.hash(senhaOriginal,casas);
        const sql = `
            INSERT INTO usuarios
            (nomeUsuario,
            emailUsuario,
            senhaUsuario)
            VALUES (?,?,?)
        `;

        const resultado = await conexao.query(
            sql,[nomeUsuario,emailUsuario,senhaUsuario]
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

async function atualizarUsuario(req,res){
    const { id } = req.params;

    const {
        nomeUsuario,
        emailUsuario
    } = req.body;

    try {
        const [resultado] = await conexao.query(
            `UPDATE usuarios
             SET nomeUsuario = ?,
                 emailUsuario = ?
             WHERE idUsuario = ?`,
            [nomeUsuario, emailUsuario, id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: 'Usuário não encontrado'
            });
        }

        res.status(200).json({
            mensagem: 'Usuário atualizado com sucesso'
        });

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: 'Erro ao atualizar usuário'
        });
    }
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