import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BetweenLine from '../components/BetweenLine'
import Loader from './Loader'
import ReadMore from "../components/ReadMore"
import {
    Box,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'

const Hadiths = ({ data, loading, bookname, chapter, loadingHadith, from , totalItems ,to }) => {

    return (
        <>
            {/* Book name */}
            <Box
                bg={"#1F2125"}
                textAlign={"center"}
            >
                <Text
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                    color={"white"}
                    textDecorationColor={"white"}
                    mb={0}
                >
                    <span>{chapter}</span>
                    <span><i style={{ marginLeft: "10px" }} class="fa-solid fa-book"></i></span>
                    <span style={{ marginLeft: "10px" }}>: {bookname}</span>
                </Text>
                <Box
                    pl={{ base: "25px", md: "91px", lg: "50%" }}
                    pr={{ base: "25px", md: "91px", lg: "50%" }}
                    pt={{ base: "30px", md: "78px", lg: "78px" }}
                >

                    <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    >
                        <Box
                            bg={"#242424"}
                        >
                            <Table border={"solid"} bgColor={""} size={{ base: "sm", md: "md", lg: "lg" }}>
                                {loading ? (
                                    <Loader />
                                ) : (<>
                                    <Thead>
                                        <Tr>
                                            <Th color={"white"} textAlign={""}>From</Th>
                                            <Th color={"white"} textAlign={""}>TO</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Td color={"white"} textAlign={""}>{from}</Td>
                                        <Td color={"white"} textAlign={""}>{to}</Td>
                                    </Tbody>
                                </>)}

                            </Table>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <BetweenLine />
            {loadingHadith ? <Loader /> : (
                <>
                    {data && data.map((item, index) => (
                        <Box>
                            {/* Chapter */}
                            <Box
                                bg={"#242424"}
                                pl={{ base: "20px", md: "18px", lg: "15px" }}
                                pr={{ base: "20px", md: "18px", lg: "15px" }}
                                pt={{ base: "8px", md: "12px", lg: "15px" }}
                                pb={{ base: "8px", md: "12px", lg: "15px" }}
                                mb={"25px"}
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <Text
                                    color={"white"}
                                    fontSize={{ lg: "18px", md: "16px", base: "13px" }}
                                    fontFamily={"Istok Web"}
                                    fontWeight={700}
                                >
                                    CHAPTER {item.hadithNumber}
                                </Text>
                                <Text
                                    color={"white"}
                                    fontSize={{ lg: "18px", md: "18px", base: "13px" }}
                                    fontFamily={"Inter"}
                                >
                                    {item.headingEnglish ? item.headingEnglish : "No Title"}
                                </Text>
                            </Box>
                            {/* Arabic Hadith */}
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="900"
                                bg={"#1F2125"}
                                pl={{ base: "4%", md: "15%", lg: "15%" }}
                                mb={{ base: "20px", md: "20px", lg: "25px" }}
                            >
                                <Text
                                    fontFamily={"Inter"}
                                    fontSize={{ lg: "25px", md: "22px", base: "15px" }}
                                    fontWeight={700}
                                    textAlign={"end"}
                                    color={"white"}
                                >
                                    <ReadMore text={item.hadithArabic} />
                                </Text>
                            </Box>
                            {/* English Hadith */}
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="900"
                                bg={"#FFF"}
                                borderRadius={"0px 40px 40px 0px"}
                                pl={{ base: "10px", md: "20px", lg: "30px" }}
                                pr={{ base: "4%", md: "15%", lg: "15%" }}
                                pt={{ base: "10px", md: "14px", lg: "18px" }}
                                mb={{ base: "15px", md: "20px", lg: "25px" }}
                            >
                                <Text
                                    color={"black"}
                                    fontSize={{ lg: "20px", md: "18px", base: "15px" }}
                                    fontFamily={"Istok Web"}
                                    fontWeight={700}
                                    mb={{ base: "10px", lg: "15px", md: "8px" }}
                                >
                                    {item.englishNarrator}
                                </Text>
                                <Text
                                    color={"black"}
                                    fontSize={{ base: "13px", md: "14", lg: "15px" }}
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                >
                                    <ReadMore text={item.hadithEnglish} />
                                </Text>
                            </Box>
                            {/* Reference and save to bookmark btn */}
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Box>
                                            <Text
                                                color={"white"}
                                            >
                                                <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>Reference :</text>
                                                <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" }, fontWeight: "400" }}>{item.bookSlug}-{item.hadithNumber}</text>
                                            </Text>
                                            <Text
                                                color={"white"}
                                            >
                                                <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>In-book reference : </text>
                                                <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" } }}>book {chapter} , Hadith {index + 1}</text>
                                            </Text>
                                        </Box>
                                    </Col>
                                    {/* Save to bookmark */}
                                    {/* <Col>
                                <Box
                                    display="flex" justifyContent={{ base: "center", lg: "flex-end", md: "flex-end" }}
                                >   
                                    <Button
                                        size={{ base: "sm", md: "md", lg: "lg" }}
                                        bg={"#272F33"}
                                        color={"white"}
                                    >
                                        <i style={{ marginRight: "10px" }} class="fa-regular fa-bookmark"></i>
                                        SAVE TO BOOKMARK
                                    </Button>
                                </Box>
                            </Col> */}
                                    <BetweenLine />
                                </Row>
                            </Box>
                        </Box>
                    ))}
                </>
            )}


        </>
    )
}

export default Hadiths