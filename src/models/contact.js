'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatótio'],
    },
    address: {
        type: String,
        required: [true, 'O endereço é obrigatótio'],
    },
    phone: {
        type: String,
        required: [true, 'O telefone é obrigatótio'],
        trim: true
    },
    mail: {
        type: String,
        required: [true, 'O e-mail é obrigatótio'],
        trim: true
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    }
});

module.exports = mongoose.model('Contact', schema);