import { User } from "../models/User.js"


// GET ALL USER
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// GET USER
export const getUser = async (req, res) => {
    const { id } = req.query;

    try {
        const user = await User.findByPk(id);
        if (user) {
            return res.json({ user });
        } else {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Sunucu hatası.' });
    }
}

// CREATE NEW USER
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({ user });
    } catch (error) {
        return res.status(500).json({ error: 'Sunucu hatası.' });
    }
}

// DELETE USER
export const deleteUser = async (req, res) => {
    const { id } = req.query;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
        }

        await User.destroy({
            where: {
                id: user.id
            }
        });

        return res.json({ message: 'Kullanıcı silindi.' });
    } catch (error) {
        return res.status(500).json({ error: 'Sunucu hatası.' });
    }
}


// UPDATE USER

export const updateUser = async (req, res) => {
    const { id } = req.query;
    const updatedFields = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
        }

        // Yalnızca belirli parametreleri güncelle
        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                user[field] = updatedFields[field];
            }
        });

        await user.save();

        return res.json({ user });
    } catch (error) {
        return res.status(500).json({ error: 'Sunucu hatası.' });
    }
}