import React, { useEffect, useState } from 'react'
import GoBackBtn from '../components/GoBackBtn'
import { Box } from '@chakra-ui/react'
import Hadiths from '../components/Hadiths'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const HadithPage = () => {

    const params = useParams()
    const name = params.name
    const chapter = params.chapter
    const bookname = params.bookname
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [hadith, setHadith] = useState([])
    const [bookName, setBookName] = useState([])
    const [loadingBook, setLoadingBook] = useState(false)

    const fetchHadith = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/sunna/getCollectionsHadith/${name}/book/${chapter}`)
            setHadith(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const fetchBookname = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/sunna/getCollectionsBook/${name}`)
            setBookName(data)
            console.log(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchHadith()
        fetchBookname()
    }, []);

    return (
        <>
            <GoBackBtn page={"Hadith"} name={name} />
            <Box
                bg={"#1F2125"}
                pl={{ base: "20px", md: "50px", lg: "108px" }}
                pr={{ base: "20px", md: "50px", lg: "108px" }}
            >
                <Hadiths
                    bookname={bookname}
                    chapter={chapter}
                    loading={loading}
                    data={hadith}
                />
            </Box>

        </>
    )
}

export default HadithPage