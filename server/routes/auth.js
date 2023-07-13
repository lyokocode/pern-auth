import express from "express";
import { login, register } from "../controllers/Auth.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// REGISTER
router.post("/register", register)

// LOGIN
router.post("/login", login)

// CHECK
router.get("/check", verifyToken, (req, res, next) => {
    res.send("hello user you are logged in")
})

// CHECK
router.get("/check/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete only your account.");
});


export default router