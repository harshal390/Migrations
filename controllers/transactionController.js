const User = require("../models/index").sequelize.models.User;
const Profile = require("../models/index").sequelize.models.Profile;

const transactionController = async (req, res) => {
    //unmanaged transaction
    const { firstName, lastName, email, mobileNo, about, profile_image, username, invoice_address } = { ...req.body };
    const userObj = { firstName, lastName, email, mobileNo, about }
    const profileObj = { profile_image, username, invoice_address };
    try {
        const t = await require("../models/index").sequelize.transaction();
        const user = await User.create({ ...userObj });
        await t.commit();
        const userId = await user.id;
        if (user && userId) {
            try {
                const profile = await Profile.create({ ...profileObj, userId });
                res.status(200).json({ message: `user & profile added successfully..!`, user, profile });
            } catch (error) {
                t.rollback();
                User.destroy({
                    where: {
                        id: userId
                    }
                })
                res.status(400).json({ error: "rollback" });
            }

        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const managedTransactionController = async (req, res) => {
    try {
        const { firstName, lastName, email, mobileNo, about, profile_image, username, invoice_address } = { ...req.body };
        const userObj = { firstName, lastName, email, mobileNo, about }
        const profileObj = { profile_image, username, invoice_address };
        await require("../models/index").sequelize.transaction(async (t) => {
            const user = await User.create({ ...userObj }, { transaction: t });
            const userId = await user.id;
            const profile = await Profile.create({ ...profileObj, userId }, { transaction: t });
            res.status(200).json({ message: 'Commit', user, profile })
        })
    } catch (error) {
        res.status(400).json({ status: 'rollback', message: error.toString()})
    }
}

module.exports = { transactionController, managedTransactionController };