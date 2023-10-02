import express from "express";
import {registerUser, loginUser} from "../controller/userController.js"

const routes = express.Router()

routes.route("/register")
    .post(registerUser)
routes.route("/login")
    .post(loginUser)

export default routes