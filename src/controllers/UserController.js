const User = require('../models/Users');

class UserController {
    async create(req, res) {
        const user = await User.create(req.body, (err, success) => {
            if (err) return res.status(400).send({
                message: 'Não foi possível criar usuário, verifique as informações enviadas',
                details: err
            })
            return res.send({
                message: 'Usuário criado com sucesso!',
                userRemoved: req.params.id
            })
        });
    }

    async findById(req, res) {
        const user = await User.findById(req.params.id, (err, success) => {
            if (err) return res.status(400).send({
                message: 'Não foi possível localizar usuário, verifique o id',
                details: err
            })
            return res.send({
                message: 'Usuário!',
                userRemoved: req.params.id
            })
        });

        return res.json(user);
    }

    async find(req, res) {
        const user = await User.find();

        return res.json(user);
    }

    async del(req, res) {
        const user = await User.findByIdAndDelete(req.params.id, (err, success) => {
            if (err) return res.status(400).send({
                message: 'Não foi possível remover registro, verifique o id solicitado!',
                details: err
            })
            return res.send({
                message: 'Usuário removido com sucesso!',
                userRemoved: req.params.id
            })
        });
    }

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, (err, success) => {
            if (err) return res.status(400).send({
                message: 'Não foi possível atualizar registro, verifique as informações enviadas!'
            })
            return res.send({
                message: 'USuário atualizado com sucesso!'
            })
        });
    }


}

module.exports = new UserController();