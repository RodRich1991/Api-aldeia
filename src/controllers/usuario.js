'use strict';
const mySql = require('../connection.js');

exports.findAll = (req, res, next) => {
	const query = "SELECT * FROM tb_usuario WHERE id_status = 1";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Usuarios encontrados.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum usuario encontrado.'}});
			}
		}
	})
};

// exports.findOneById = (req, res, next) => {
// 	const query = "SELECT * FROM tb_usuario WHERE id="+req.params.id;
// 	console.warn(query);
// 	mySql.query(query, (error, results, fields) => {
// 		if (error) {
// 			console.error(error.sqlMessage);
// 			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
// 		} else {
// 			if (results.length > 0) {
// 				res.status(200).send({ message: { type: 'success', description: 'Usuario encontrado.'}, data: results });
// 			} else {
// 				res.status(404).send({ message: { type: 'error', description: 'Nenhum usuario encontrado.'}});
// 			}
// 		}
// 	})
// };

exports.findUser = (req, res, next) => {
	const query = "SELECT * FROM tb_usuario WHERE usuario='"+req.params.user+"' AND id_status = 1";
	console.warn(query);
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Usuario encontrado.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum usuario encontrado.'}});
			}
		}
	})
};

exports.post = (req, res, next) => {
	const query = "INSERT INTO tb_usuario(nome, usuario, senha, email) VALUES ('"+req.body.nome+"', '"+req.body.usuario+"', '"+req.body.senha+"', '"+req.body.email+"')";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			const query = "SELECT * FROM tb_usuario WHERE id="+results.insertId;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(201).send({ message: { type: 'success', description: 'Usuario criado.'}, data: results });
				} else {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao criar usuario.'}});
				}
			})
		}
	})
};

exports.put = (req, res, next) => {
	const query = "UPDATE tb_usuario SET nome = '"+req.body.nome+"', usuario = '"+req.body.usuario+"', senha = '"+req.body.senha+"', email = '"+req.body.email+"', id_status = "+req.body.idStatus+" WHERE id = "+req.body.id;
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}})
		} else {
			const query = "SELECT * FROM tb_usuario WHERE id="+req.body.id;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(200).send({ message: { type: 'success', description: 'Usuario Atualizado.'}, data: results });
				} else {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao Atualizar usuario.'}});
				}
			})
		}
	})
};
