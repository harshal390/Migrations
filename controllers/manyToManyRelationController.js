const Post = require('../models/index').sequelize.models.Post;
const Tag = require('../models/index').sequelize.models.Tag;

const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: ["post_image", "post_description"],
            include: [{
                model: Tag,
                attributes: ["tag"],
            }]
        });
        res.status(200).json({ message: "Welcome to CRUD Operations..!", posts });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { getPosts };