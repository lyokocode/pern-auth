import { User } from "../models/User.js";

export const register = async (req, res, next) => {

    try {
        try {
            const newUser = await User.create(req.body);
            return res.status(201).json(newUser);
        } catch (err) {
            next(err)
        }
    } catch (err) {
        next(err)
    }

}