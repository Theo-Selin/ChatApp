import express, { Request, Response, Router } from "express"
import { loginUser } from "../services/authServices"

const loginRouter = express.Router()

loginRouter.post("/", loginUser)

export default loginRouter