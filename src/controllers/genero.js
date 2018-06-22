'use strict';
const mySql = require('../connection.js');

exports.findAll = (req, res, next) => {	
	const query = "SELECT * FROM tb_genero";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Gêneros encontrados.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum gênero encontrado.'}});
			}
		}
	})
};

exports.findOneById = (req, res, next) => {
	const query = "SELECT * FROM tb_genero WHERE id="+req.params.id;
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(400).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			if (results.length > 0) {
				res.status(200).send({ message: { type: 'success', description: 'Gênero encontrado.'}, data: results });
			} else {
				res.status(404).send({ message: { type: 'error', description: 'Nenhum gênero encontrado.'}});
			}
		}
	})
};

exports.post = (req, res, next) => {
	const query = "INSERT INTO tb_genero(nome) VALUES ('"+req.body.nome+"')";
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}});
		} else {
			const query = "SELECT * FROM tb_genero WHERE id="+results.insertId;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(201).send({ message: { type: 'success', description: 'Gênero criado.'}, data: results });
				} else {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao criar gênero.'}});
				}
			})
		}
	})
};

exports.put = (req, res, next) => {
	const query = "UPDATE tb_genero SET nome = '"+req.body.nome+"' WHERE id = "+req.body.id;
	mySql.query(query, (error, results, fields) => {
		if (error) {
			console.error(error.sqlMessage);
			res.status(401).send({ message: { type: 'error', description: error.sqlMessage}})
		} else {
			const query = "SELECT * FROM tb_genero WHERE id="+req.body.id;
			mySql.query(query, (error, results, fields) => {
				if (results.length > 0) {
					res.status(200).send({ message: { type: 'success', description: 'Gênero Atualizado.'}, data: results });
				} else {
					res.status(400).send({ message: { type: 'error', description: 'Erro ao Atualizar gênero.'}});
				}
			})
		}
	})
};
