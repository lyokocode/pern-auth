import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
    res.send("hello from auth")
})

router.get("/register", (req, res) => {
    res.send("hello from register")
})

router.get("/login", (req, res) => {
    res.send("hello from login")
})

export default router