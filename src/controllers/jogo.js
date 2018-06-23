'use strict';
const mySql = require('../connection.js');

exports.findAll = (req, res, next) => {
	const query = "SELECT * FROM tb_jogo";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Jogos encontrados.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum jogo encontrado.'}});
			}
		}
	})
};

exports.findOneById = (req, res, next) => {
	const query = "SELECT * FROM tb_jogo WHERE id="+req.params.id;
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Jogo encontrado.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum jogo encontrado.'}});
			}
		}
	})
};

exports.post = (req, res, next) => {
	const query = "INSERT INTO tb_jogo (nome, id_genero) VALUES ('"+req.body.nome+"', "+req.body.idGenero+")";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			const query = "SELECT * FROM tb_jogo WHERE id="+results.insertId;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(201).send({ message: { type: 'success', description: 'Jogo criado.'}, data: results });
				} else {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao criar jogo.'}});
				}
			})
		}
	})
};

exports.put = (req, res, next) => {
	const query = "UPDATE tb_jogo SET nome = '"+req.body.nome+"', id_genero = "+req.body.idGenero+", votos = "+req.body.votos+" WHERE id = "+req.body.id;
	console.warn(query);
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}})
		} else {
			const query = "SELECT * FROM tb_jogo WHERE id="+req.body.id;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(200).send({ message: { type: 'success', description: 'Jogo Atualizado.'}, data: results });
				} else {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao Atualizar jogo.'}});
				}
			})
		}
	})
};
