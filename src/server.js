// import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);

mongoose.connect('mongodb+srv://teste:teste@cluster0-6zzy1.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(require('./routes'));

server.listen(process.env.PORT || 3333);