import asyncHandler from "express-async-handler"
import axios from "axios"


// @desc    Get collections name
// @route   POST /api/sunna/getCollectionsName
// @access  Public
const getCollectionsName = asyncHandler(async (req, res) => {
    const config = {
        headers: {
            "X-API-Key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk",
        }
    }
    const url = "https://api.sunnah.com/v1/collections"
    axios.get(url, config)
        .then(response => {
            console.log("Success")
            const data = response.data
            // console.log(data.data)
            res.json(data.data);
        })
        .catch(error => {
            console.log("error")
            // console.error('Error fetching collections:', error);
            res.status(500).json({ error: 'Unable to fetch collections' });
        });
})

export { getCollectionsName }