import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/User.js";
import { createError } from "../utils/error.js"
import { updateUserOnlineStatus } from "./User.js";


// REGISTER
export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    try {
        const newUser = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            userName: req.body.userName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            company: req.body.company,
            country: req.body.country,
            image: req.body.image,
            password: hash
        });
        return res.status(201).json(newUser);
    } catch (err) {
        next(err)
    }
}

// LOGIN
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });

        if (!user) return next(createError(404, "user not found"))

        const isPsswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPsswordCorrect) return next(createError(400, "wrong password or username"))

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '6h' })

        const { password, role, ...info } = user.dataValues

        await updateUserOnlineStatus(user.id, true);

        return res
            .cookie("access_token", token, {
                httpOnly: true
            })
            .status(200)
            .json({ ...info });

    } catch (err) {
        next(err)
    }
}

// LOGOUT
export const logout = async (req, res, next) => {
    const userId = req.params.id; // Assuming you can get the user ID from params


    try {
        await User.update({ isActive: false }, { where: { id: userId } });


        res.clearCookie("access_token");
        res.status(200).json({ message: "Logout successful." });
    } catch (err) {
        next(err);
    }
};