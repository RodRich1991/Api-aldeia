'use strict';

const express = require('express');
const router = express.Router();
// const controller = require('../controllers/user');

router.get('/', (req, res, next) => {
	res.status(200).send({
		title: "Node Store Api",
		version: "0.0.1"
	});
});

// router.post('/login', controller.authenticate);

module.exports = router;