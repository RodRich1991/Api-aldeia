'use strict';
const jwt = require('jsonwebtoken');

exports.generateToken = (data) => {
    return jwt.sign(data, 'sgãsdjã-ewr423fd-fsdqwdfd', {expiresIn: '1h'});
}

exports.decodeToken = async (token) => {
    return await jwt.verify(token, global.SALT_KEY);
}

exports.authorize = (req, res, next) => {
    var token = req.query.authorization || req.headers.authorization;
    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito.'
        });
    } else {
        jwt.verify(token, 'sgãsdjã-ewr423fd-fsdqwdfd', function(error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido.'
                });
            } else {
                next();
            }
        })
    }
}
