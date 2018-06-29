'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario');

router.post('/usuario', controller.post);

router.get('/usuario', controller.findAll);

// router.get('/usuario/:id', controller.findOneById);

router.get('/usuario/:user', controller.findUser);

router.put('/usuario/:id', controller.put);

module.exports = router;
