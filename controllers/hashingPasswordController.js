const userdetail = require('../models/userdetail');

const UserDetail = require('../models/index').sequelize.models.UserDetail;

const hashingPasswordController = async (req, res) => {
    try {
        const userDetail = await UserDetail.create({ ...req.body })
        res.status(200).json({ message: `${req.body.username} has created account successfully..!`, userDetail });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const updatePasswordController = async (req, res) => {
    try {
        const userDetail = await UserDetail.findOne({ where: { username: req.body.username }, individualHooks: true, })
        const password = req.body.password;
        userDetail.set({ ...userDetail, password });
        userDetail.save();
        res.status(200).json({ message: `${req.body.username} has update password successfully!`, userDetail });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { hashingPasswordController, updatePasswordController };