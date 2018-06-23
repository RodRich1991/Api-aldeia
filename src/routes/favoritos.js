'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/favoritos');

router.post('/favoritos', controller.post);

router.get('/favoritos', controller.findAll);

router.get('/favoritos/:idUsuario&:idJogo', controller.findOneById);

router.delete('/favoritos/:idUsuario&:idJogo', controller.delete);

module.exports = router;
