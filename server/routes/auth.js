import express from "express";
import { login, register } from "../controllers/Auth.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()

// REGISTER
router.post("/register", register)

// LOGIN
router.post("/login", login)

// CHECK

router.get("/check", verifyToken, (req, res, next) => {
    res.send("hello user you are logged in")
})


export default router