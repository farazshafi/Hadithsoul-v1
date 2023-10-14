import express from "express"
import { getCollectionsName, getCollectionsBook, getCollectionsHadith } from "../controller/sunnaController.js"

const router = express.Router()

router.route("/getCollectionsName")
    .get(getCollectionsName)
router.route("/getCollectionsBook/:name")
    .get(getCollectionsBook)
router.route("/getCollectionsHadith/:name/book/:chapter")
    .get(getCollectionsHadith)

export default router