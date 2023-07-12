import express from "express";
import { createUser, getAllUsers, getUser, deleteUser, updateUser } from "../controllers/User.js";


const router = express.Router()

// GET ALL USER
router.get("/", getAllUsers)

// GET USER
router.get("/user", getUser)

// CREATE NEW USER
router.post("/", createUser);

// DELETE USER
router.delete("/user", deleteUser)

// UPDATE USER
router.put("/user", updateUser)


export default router
