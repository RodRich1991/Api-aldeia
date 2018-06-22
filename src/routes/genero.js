'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/genero');

router.post('/genero', controller.post);

router.get('/genero', controller.findAll);

router.get('/genero/:id', controller.findOneById);

router.put('/genero/:id', controller.put);

module.exports = router;