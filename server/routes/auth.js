import express from "express";
import { login, logout, register } from "../controllers/Auth.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// REGISTER
router.post("/register", register)

// LOGIN
router.post("/login", login)

// LOGOUT
router.post("/logout/:id", logout);


// check

router.get("/check/:id", verifyUser, (req, res, next) => {
    res.send("hello user or admin")
})

export default router