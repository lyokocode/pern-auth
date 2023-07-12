import { User } from "../models/User.js"

// GET ALL USER
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll({});
        res.json(users);
    } catch (err) {
        next(err)
    }
};

// GET USER
export const getUser = async (req, res, next) => {
    const { id } = req.query;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        return res.json({ user });

    } catch (err) {
        next(err)
    }
}

// DELETE USER
export const deleteUser = async (req, res, next) => {
    const { id } = req.query;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        await User.destroy({
            where: {
                id: user.id
            }
        });

        return res.json({ message: 'User has been deleted' });
    } catch (err) {
        next(err)
    }
}

// UPDATE USER
export const updateUser = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                user[field] = updatedFields[field];
            }
        });

        await user.save();

        return res.json({ user });
    } catch (err) {
        next(err)
    }
}