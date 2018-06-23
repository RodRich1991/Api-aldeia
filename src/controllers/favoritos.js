'use strict';
const mySql = require('../connection.js');

exports.findAll = (req, res, next) => {
	const query = "SELECT * FROM tb_favoritos";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Favoritos encontrados.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum favorito encontrado.'}});
			}
		}
	})
};

exports.findOneById = (req, res, next) => {
	const query = "SELECT * FROM tb_favoritos WHERE id_usuario="+req.params.idUsuario+" AND id_jogo ="+req.params.idJogo;
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Favorito encontrado.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum favorito encontrado.'}});
			}
		}
	})
};

exports.post = (req, res, next) => {
	const query = "INSERT INTO tb_favoritos(id_usuario, id_jogo) VALUES ("+req.body.idUsuario+", "+req.body.idJogo+")";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			const query = "SELECT * FROM tb_favoritos WHERE id_usuario="+req.body.idUsuario+" AND id_jogo="+req.body.idJogo;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(201).send({ message: { type: 'success', description: 'Favorito criado.'}, data: results });
				} else {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao criar favorito.'}});
				}
			})
		}
	})
};

exports.delete = (req, res, next) => {
	const query = "DELETE FROM tb_favoritos WHERE id_usuario = "+req.body.idUsuario+" AND id_jogo = "+req.body.idJogo;
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}})
		} else {
			const query = "SELECT * FROM tb_favoritos WHERE id_usuario="+req.body.idUsuario+" AND id_jogo="+req.body.idJogo;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao Apagar favorito.'}});
				} else {
					res.status(200).send({ message: { type: 'success', description: 'Favorito Apagado.'}, data: results });
				}
			})
		}
	})
};
