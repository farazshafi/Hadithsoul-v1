import React, { useEffect, useState } from 'react'
import GoBackBtn from '../components/GoBackBtn'
import { Box, Text, useToast } from '@chakra-ui/react'
import Hadiths from '../components/Hadiths'
import axios from 'axios'
import Offline from '../components/Offline'
import { useNavigate, useParams } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import { Container, Pagination, Box as MuiBox } from '@mui/material'


const HadithPage = () => {

    const params = useParams()
    const name = params.name
    const chapter = params.chapter
    const bookname = params.bookname

    const toast = useToast()
    const navigate = useNavigate()
    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    const [loadingHadith, setLoadingHadith] = useState(false)
    const [loading, setLoading] = useState(false)
    const [hadith, setHadith] = useState([])
    const [bookName, setBookName] = useState([])
    const [offline, setOffline] = useState(false)
    const [lastpage, setLastPage] = useState(Number)
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(Number);
    const [from, setFrom] = useState(Number);

    const fetchHadith = async () => {
        try {
            setLoadingHadith(true)
            const { data } = await axios.get(`/api/sunna/getCollectionsHadith/${name}/book/${chapter}/${page}`)
            setHadith(data.data)
            setTotalItems(data.totalItems)
            setFrom(data.from)
            setLastPage(data.lastPage)
            setOffline(false)
            setLoadingHadith(false)
        } catch (error) {
            toast({
                title: 'Check You Connection.',
                description: "Try Again.",
                status: 'error',
                duration: 5000,
                position: "top-left",
                isClosable: true,
            })
            setOffline(true)
            console.log(error)
            setLoading(false)
        }
    }

    const fetchBookname = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/sunna/getCollectionsBook/${name}`)
            setBookName(data)
            setOffline(false)
            setLoading(false)
        } catch (error) {
            setOffline(true)
            console.log(error)
            setLoading(false)
        }

    }

    const handleChange = (event, selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= lastpage && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    useEffect(() => {
        fetchHadith()
        fetchBookname()
    }, []);
    useEffect(() => {
        scrollTop()
        fetchHadith();
    }, [page]);
    return (
        <>
            <ChakraProvider>
                <GoBackBtn page={"Hadith"} name={name} />
                <Box
                    bg={"#1F2125"}
                    pl={{ base: "20px", md: "50px", lg: "108px" }}
                    pr={{ base: "20px", md: "50px", lg: "108px" }}
                >
                    {offline ? (
                        <Offline />
                    ) : (
                        <>
                            <Hadiths
                                loadingHadith={loadingHadith}
                                bookname={bookname}
                                chapter={chapter}
                                loading={loading}
                                data={hadith}
                            />
                        </>
                    )
                    }
                </Box >
            </ChakraProvider>
            <Container>
                <MuiBox
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    pt={"10px"}
                    pb={"10px"}
                    bgcolor={"white"}
                >
                    <Pagination color='primary' count={lastpage} page={page} onChange={handleChange} />
                </MuiBox>
            </Container>
        </>

    )
}

export default HadithPage