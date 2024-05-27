const User = require('../models/index').sequelize.models.User;
const Post = require('../models/index').sequelize.models.Post

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ["firstName", "lastName", "email", "mobileNo", "about"],
            include: [{
                model: Post,
                attributes: ["post_image", "post_description"]
            }]
        });
        res.status(200).json({ message: "Welcome to CRUD Operations..!", users });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = {getUsers};