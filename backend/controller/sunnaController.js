import asyncHandler from "express-async-handler";
import axios from "axios";

// @desc    Get collections name
// @route   GET /api/sunna/getCollectionsName
// @access  Public
const getCollectionsName = asyncHandler(async (req, res) => {
    try {
        const url = `https://www.hadithapi.com/api/books?apiKey=${process.env.API_KEY}`;
        const response = await axios.get(url);
        const data = response.data.books;
        res.json(data);
    } catch (error) {
        console.error('Error fetching collections:', error);
        res.status(500).json({ error: 'Unable to fetch collections' });
    }
});

// @desc    Get collections Book
// @route   GET /api/sunna/getCollectionsDetails/:name
// @access  Public
const getCollectionsBook = asyncHandler(async (req, res) => {
    const name = req.params.name;
    const url = `https://www.hadithapi.com/api/${name}/chapters?apiKey=${process.env.API_KEY}`;

    try {
        const response = await axios.get(url);
        const data = response.data.chapters;
        // const filteredData = data.find((item) => item.lang !== "ar") || {};
        // console.log(filteredData)
        res.json(data);
    } catch (error) {
        res.status(401)
        throw new Error("Check your Url.")
    }
});

// @desc    Get collections Hadith
// @route   GET /api/sunna/getCollectionsHadith/:name/book/:chapter
// @access  Public
const getCollectionsHadith = asyncHandler(async (req, res) => {
    const name = req.params.name;
    const chapter = req.params.chapter;
    const url = `https://www.hadithapi.com/api/hadiths/?apiKey=${process.env.API_KEY}&book=${name}&chapter=${chapter}`;
    try {
        const response = await axios.get(url);
        const data = response.data.hadiths.data;
        res.json(data);
    } catch (error) {
        res.status(401)
        throw new Error("Check your Url.")
    }
});

export { getCollectionsName, getCollectionsBook, getCollectionsHadith };
