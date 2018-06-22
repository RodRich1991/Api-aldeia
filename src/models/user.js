'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        required: [true, 'O usuário é obrigatótio'],
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatótia'],
    },
});

module.exports = mongoose.model('User', schema);