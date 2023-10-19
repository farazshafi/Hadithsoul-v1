import express from "express"
import { getCollectionsName, getCollectionsBook, getCollectionsHadith, getSearchedHadith } from "../controller/sunnaController.js"

const router = express.Router()

// Get All of imamas
router.route("/getCollectionsName")
    .get(getCollectionsName)

// Get Books of a imam
router.route("/getCollectionsBook/:name")
    .get(getCollectionsBook)

// Get Hadith of a Book from imam
router.route("/getCollectionsHadith/:name/book/:chapter/:page")
    .get(getCollectionsHadith)

// Get Searched Hadith
router.route("/getSearchedHadith/:keyword/:page")
    .get(getSearchedHadith)


export default router