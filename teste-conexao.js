// pool
const conexao = require('./src/database/conexao') 

async function testarConexao(){
    try {

        const resultado = await conexao.query('SELECT 1 + 1 AS soma');

        console.log('Conexão com mysql funcionando!')
        console.log(resultado[0]);

        process.exit(); // deveria ter numero aqui?

    } catch (erro) {

        console.log('Erro ao conectar no mysql:')
        console.log(erro.message);

        process.exit(1);

    }
}

testarConexao();
