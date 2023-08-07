import express from "express";
import { getAllUsers, getUser, deleteUser, updateUser } from "../controllers/User.js";
import { verifyAdmin, verifySuperAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router()

// GET ALL USER
router.get("/", getAllUsers)

// GET USER
router.get("/user", verifyUser, getUser)

// DELETE USER
router.delete("/user", deleteUser)

// UPDATE USER
router.put("/user", updateUser)


export default router
