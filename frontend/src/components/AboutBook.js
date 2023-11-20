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
import booksOfNasai from "../data/book chapters/nasaiBookChapter"
import booksOfAbudawd from "../data/book chapters/abudawudBookChapter"
import booksOfTirmidhi from "../data/book chapters/tirmidhiBookChapter"
import booksOfIbnmajah from "../data/book chapters/ibnmajahBookChapter"
import booksOfAhmad from "../data/book chapters/ahmadBookChapter"
import booksOfForty from "../data/book chapters/fortyBookChapter"
import booksOfRiyadussalihin from "../data/book chapters/riyadussalihinBookChapter"
import booksOfMishkat from "../data/book chapters/mishkatBookChapter"
import booksOfAdab from "../data/book chapters/adabBookChapter"
import booksOfShamail from "../data/book chapters/shamailBookChapters"
import booksOfHisn from "../data/book chapters/hisnBookChapters"
import booksOfVirtues from "../data/book chapters/virtuesBookChapter"
import booksOfbulugh from '../data/book chapters/bulughBookChapters'
import booksOfNawawi from "../data/book chapters/nawawiBookChapter"
import booksOfDarimi from "../data/book chapters/darimiBookChapter"

const AboutBook = ({ name }) => {
    const [bookName, setBookName] = useState([])
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)
    const navigate = useNavigate()

    const bookData = {
        bukhari: booksOfBukhari.data,
        muslim: booksOfMuslim.data,
        malik: booksOfMalik.data,
        nasai: booksOfNasai.data,
        abudawud: booksOfAbudawd.data,
        tirmidhi: booksOfTirmidhi.data,
        ibnmajah: booksOfIbnmajah.data,
        ahmad: booksOfAhmad.data,
        forty: booksOfForty.data,
        riyadussalihin: booksOfRiyadussalihin.data,
        mishkat: booksOfMishkat.data,
        adab: booksOfAdab.data,
        shamail: booksOfShamail.data,
        bulugh: booksOfbulugh.data,
        hisn: booksOfHisn.data,
        virtues: booksOfVirtues.data,
        nawawi40: booksOfNawawi.data,
        darimi: booksOfDarimi.data,

    };

    const fetchBookname = async () => {
        try {
            setLoading(true)
            setInternet(true)
            const selectedBookData = bookData[name]
            if (selectedBookData) {
                setBookName(selectedBookData);
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