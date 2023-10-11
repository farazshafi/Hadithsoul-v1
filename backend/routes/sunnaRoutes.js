import express from "express"
import {getCollectionsName} from "../controller/sunnaController.js"

const router = express.Router()

router.route("/getCollectionsName")
    .get(getCollectionsName)

export default router