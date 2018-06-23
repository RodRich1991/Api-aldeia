'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/jogo');

router.post('/jogo', controller.post);

router.get('/jogo', controller.findAll);

router.get('/jogo/:id', controller.findOneById);

router.put('/jogo/:id', controller.put);

module.exports = router;
