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

const AboutBook = ({ name }) => {
    const [bookName, setBookName] = useState([])
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)

    const navigate = useNavigate()
    const toast = useToast()

    const fetchBookname = async () => {
        try {
            setLoading(true)
            // const { data } = await axios.get(`/api/sunna/getCollectionsBook/${name}`)

           

            setInternet(true)
            // setBookName(data)
            setLoading(false)
        } catch (error) {
            setInternet(false)
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        const storedBukhariBooks = JSON.parse(localStorage.getItem("bukhari-books"))
        const storedMuslimBooks = JSON.parse(localStorage.getItem("muslim-books"))
        const storedTirmidhiBooks = JSON.parse(localStorage.getItem("tirmidhi-books"))
        const storedDawoodBooks = JSON.parse(localStorage.getItem("dawood-books"))
        const storedMajahBooks = JSON.parse(localStorage.getItem("majah-books"))
        const storedNasaiBooks = JSON.parse(localStorage.getItem("nasai-books"))
        const storedMishkatBooks = JSON.parse(localStorage.getItem("mishkat-books"))
        const storedAhmadBooks = JSON.parse(localStorage.getItem("ahmad-books"))
        const storedSahihaBooks = JSON.parse(localStorage.getItem("sahiha-books"))

        if (name === "sahih-bukhari") {
            if (storedBukhariBooks) {
                setBookName(storedBukhariBooks)
            } else fetchBookname()
        }

        if (name === "sahih-muslim") {
            if (storedMuslimBooks) {
                setBookName(storedMuslimBooks)
            } else fetchBookname()
        }

        if (name === "al-tirmidhi") {
            if (storedTirmidhiBooks) {
                setBookName(storedTirmidhiBooks)
            } else fetchBookname()
        }

        if (name === "abu-dawood") {
            if (storedDawoodBooks) {
                setBookName(storedDawoodBooks)
            } else fetchBookname()
        }

        if (name === "ibn-e-majah") {
            if (storedMajahBooks) {
                setBookName(storedMajahBooks)
            } else fetchBookname()
        }

        if (name === "sunan-nasai") {
            if (storedNasaiBooks) {
                setBookName(storedNasaiBooks)
            } else fetchBookname()
        }

        if (name === "mishkat") {
            if (storedMishkatBooks) {
                setBookName(storedMishkatBooks)
            } else fetchBookname()
        }

        if (name === "musnad-ahmad") {
            if (storedAhmadBooks) {
                setBookName(storedAhmadBooks)
            } else fetchBookname()
        }

        if (name === "al-silsila-sahiha") {
            if (storedSahihaBooks) {
                setBookName(storedSahihaBooks)
            } else fetchBookname()
        }
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
                                        {bookName && bookName.map((book) => (
                                            <Tr cursor={"pointer"} onClick={() => {
                                                navigate(`/collections/${name}/book/${book.chapterEnglish}/${book.chapterNumber}`)
                                            }}>
                                                <Td key={book.id} color={"white"} textAlign={""}>{book.chapterNumber}</Td>
                                                <Td key={book.id} color={"white"} textAlign={""}>{book.chapterEnglish}</Td>
                                                <Td key={book.id} color={"white"} textAlign={""}><ArrowRightIcon /></Td>
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