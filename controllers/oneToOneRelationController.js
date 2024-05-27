
const User = require('../models/index').sequelize.models.User;
const Profile = require('../models/index').sequelize.models.Profile

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ["firstName", "lastName", "email", "mobileNo", "about"],
            include: [{
                model: Profile,
                attributes: ["profile_image", "username", "invoice_address"]
            }]
        });
        res.status(200).json({ message: "Welcome to CRUD Operations..!", users });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const addUser = async (req, res) => {
    try {
        const user = await User.create({ ...req.body })
        console.log('user was saved to the database!');
        res.status(200).json({ message: `${req.body.firstName} added successfully..!`, user });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(+req.params.id);
        if (user === null) {
            res.status(200).json({ message: "User doesn't exists..!" })
        }
        else {
            user.set({ ...user, ...req.body });
            await user.save();
            res.status(200).json({ message: `${user.firstName} updated Successfully...!`, user });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(+req.params.id);
        if (user === null) {
            res.status(200).json({ message: "User doesn't exists..!" })
        }
        else {
            user.set({ ...user, isDeleted: 1 });
            await user.save();
            res.status(200).json({ message: `${user.firstName} deleted Successfully...!`, user });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}
module.exports = { getUsers, addUser, updateUser, deleteUser };