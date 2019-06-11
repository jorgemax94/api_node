const express = require('express');
const UserController = require('./controllers/UserController')
const routes = express.Router();

routes.post('/user', UserController.create);
routes.get('/user/:id', UserController.findById);
routes.get('/user', UserController.find);
routes.delete('/user/:id', UserController.del);
routes.put('/user/:id', UserController.update);


module.exports = routes;