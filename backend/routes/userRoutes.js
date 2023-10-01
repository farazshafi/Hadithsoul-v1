import express from "express";
import {registerUser} from "../controller/userController.js"

const routes = express.Router()

routes.route("/register")
    .post(registerUser)

export default routes