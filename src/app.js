'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const indexRoute = require('./routes/index');
const generoRoute = require('./routes/genero');
const usuarioRoute = require('./routes/usuario');
const jogoRoute = require('./routes/jogo');
const favoritosRoute = require('./routes/favoritos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'authorization,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', indexRoute);
app.use('/', generoRoute);
app.use('/', usuarioRoute);
app.use('/', jogoRoute);
app.use('/', favoritosRoute);

module.exports = app;
