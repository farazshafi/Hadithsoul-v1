import express from "express"
import {
    getCollectionsName,
    getCollectionsBook,
    getCollectionsHadith,
    getSearchedHadith,
    getHadithByNumber
} from "../controller/sunnaController.js"

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

// Get Hadith by Hadith Number  
router.route("/getHadithByNumber/:name/:chapter/:number")
    .get(getHadithByNumber)


export default router