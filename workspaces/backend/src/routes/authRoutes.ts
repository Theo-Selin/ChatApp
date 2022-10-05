import express from "express";
import { loginUser } from "../services/userService";

const authRouter = express.Router()

authRouter.post("/login", loginUser)

export default authRouter