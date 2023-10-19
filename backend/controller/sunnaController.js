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

// @desc    Get Searched Hadith
// @route   GET /api/sunna/getSearchedHadith/:keyword/:page
// @access  Public
const getSearchedHadith = asyncHandler(async (req, res) => {
    const keyword = req.params.keyword;
    const page = req.params.page;
    // const chapter = req.params.chapter;
    const url = `https://www.hadithapi.com/api/hadiths/?apiKey=${process.env.API_KEY}&hadithEnglish=${keyword}&page=${page}`;
    try {
        const response = await axios.get(url);
        const hadith = response.data.hadiths.data;
        const lastpage = response.data.hadiths.last_page;
        const totalItems = response.data.hadiths.total;
        res.json({ hadith, lastpage, totalItems });
    } catch (error) {
        res.status(401)
        throw new Error("Check your Url.")
    }
});

// @desc    Get collections Hadith
// @route   GET /api/sunna/getCollectionsHadith/:name/book/:chapter/:page
// @access  Public
const getCollectionsHadith = asyncHandler(async (req, res) => {
    const name = req.params.name;
    const chapter = req.params.chapter;
    const page = req.params.page;
    const pagination = 25;
    try {
        const url = `https://www.hadithapi.com/api/hadiths/?apiKey=${process.env.API_KEY}&book=${name}&chapter=${chapter}&paginate=${pagination}&page=${page}`;
        const response = await axios.get(url)
        const data = response.data.hadiths.data;
        const totalItems = response.data.hadiths.total;
        const from = response.data.hadiths.from;
        const lastPage = response.data.hadiths.last_page;
        res.json({ data, totalItems, from, lastPage });
    } catch (error) {
        res.status(401)
        throw new Error("Check your Url.")
    }
});

export { getCollectionsName, getCollectionsBook, getCollectionsHadith, getSearchedHadith };
