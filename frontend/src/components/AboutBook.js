import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from "../components/Loader"
import { ArrowRightIcon, Rig } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'
import Offline from "../components/Offline"
import booksOfBukhari from "../data/book chapters/bukhariBookChapters"
import booksOfMuslim from "../data/book chapters/muslimBookChapters"
import booksOfMalik from "../data/book chapters/malikBookChapters"

const AboutBook = ({ name }) => {
    const [bookName, setBookName] = useState([])
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)
    const navigate = useNavigate()



    const fetchBookname = async () => {
        try {
            setLoading(true)
            setInternet(true)
            if (name === "bukhari") {
                const bookhariData = booksOfBukhari.data
                setBookName(bookhariData)
            }
            if (name === "muslim") {
                const muslimData = booksOfMuslim.data
                setBookName(muslimData)
            }
            if (name === "malik") {
                const malikData = booksOfMalik.data
                setBookName(malikData)
            }
            setLoading(false)
        } catch (error) {
            setInternet(false)
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {

        fetchBookname()
    }, []);

    return (
        <>

            {/* option one */}
            <Box
                bg={"#1F2125"}
                pl={{ base: "25px", md: "91px", lg: "91px" }}
                pr={{ base: "25px", md: "91px", lg: "91px" }}
                pb={{ base: "30px", md: "78px", lg: "78px" }}
            >
                {internet ? (
                    <>
                        <Box
                            bg={"#242424"}
                        >
                            <Table size={{ base: "sm", md: "md", lg: "lg" }}>
                                {loading ? (
                                    <Loader />
                                ) : (<>
                                    <Thead>
                                        <Tr>
                                            <Th color={"white"} textAlign={""}>Book</Th>
                                            <Th color={"white"} textAlign={""}>Title</Th>
                                            <Th color={"white"} textAlign={""}>Read</Th>
                                            {/* <Th color={"white"} textAlign={"center"}>Starting</Th> */}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {bookName && bookName.map((singleBook, index) => (
                                            <Tr key={index + 1} cursor={"pointer"} onClick={() => {
                                                // navigate(`/collections/${name}/book/${book.chapterEnglish}/${book.chapterNumber}`)
                                            }}>
                                                <Td key={index + 2} color={"white"} textAlign={""}>{singleBook.bookNumber}</Td>
                                                <Td key={index + 3} color={"white"} textAlign={""}>{singleBook.book[0].name}</Td>
                                                <Td key={index + 4} color={"white"} textAlign={""}><ArrowRightIcon /></Td>
                                                {/* <Td color={"white"} textAlign={"center"}>1/9</Td> */}
                                            </Tr>
                                        ))}

                                    </Tbody>
                                </>)}

                            </Table>
                        </Box>
                    </>
                ) : (
                    <></>
                )}

            </Box>
        </>
    )
}

export default AboutBook