import express from "express";
import { getAllUsers, getUser, deleteUser, updateUser } from "../controllers/User.js";


const router = express.Router()

// GET ALL USER
router.get("/", getAllUsers)

// GET USER
router.get("/user", getUser)

// DELETE USER
router.delete("/user", deleteUser)

// UPDATE USER
router.put("/:id", updateUser)



export default router
