'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User')

exports.authenticate = () => {
    return User.findById('5b12cbe4fb6fc07c033dc162');
}