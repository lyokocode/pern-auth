import express from "express";
import { getAllUsers, getUser, deleteUser, updateUser } from "../controllers/User.js";
import { verifyAdmin, verifySuperAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router()

// GET ALL USER
router.get("/", getAllUsers)

// GET USER
router.get("/:id", getUser)

// DELETE USER
router.delete("/:id", deleteUser)

// UPDATE USER
router.put("/:id", updateUser)



export default router
