const User = require('../models/Users');

class UserController {
    async create(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    }

    async findById(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    }

    async find(req, res) {
        const user = await User.find();

        return res.json(user);
    }
}

module.exports = new UserController();