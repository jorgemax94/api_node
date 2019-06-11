const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cep: {
        type: Number,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    agency: {
        type: Number,
        required: true
    },
    account: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Users', Users);