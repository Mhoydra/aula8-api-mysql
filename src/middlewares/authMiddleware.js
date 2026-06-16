const jwt = require('jsonwebtoken');

function autenticarToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        mensagem: "Token não informado ou inexistente"
      });
    };

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            mensagem: "Token inválido"
        });
    };

    try {
        
        const usuario = jwt.verify(
            token, 
            process.env.JWT_SECRET
        );
        req.usuario = usuario;
        next();

    } catch(erro) {
        return res.status(401).json({
            mensagem: 'token inválido ou expirado.'
        });
    };
};

module.exports = autenticarToken;
