import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BetweenLine from '../components/BetweenLine'
import { Box, Button, Center, Text } from '@chakra-ui/react'
import Loader from './Loader'


const Hadiths = ({ data, loading, bookname, chapter }) => {

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
                    <span style={{ marginLeft: "10px" }}>{bookname}</span>
                </Text>
            </Box>
            <BetweenLine />
            {loading && <Loader />}
            {data && data.map((item) => (
                <>
                    {/* Chapter */}
                    <Box
                        bg={"#242424"}
                        pl={{ base: "20px", md: "18px", lg: "15px" }}
                        pr={{ base: "20px", md: "18px", lg: "15px" }}
                        pt={{ base: "8px", md: "12px", lg: "15px" }}
                        pb={{ base: "8px", md: "12px", lg: "15px" }}
                        mb={"25px"}
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
                            {item.hadithArabic}
                        </Text>
                    </Box>
                    {/* English Hadith */}
                    <Box
                        bg={"#FFF"}
                        borderRadius={"0px 40px 40px 0px"}
                        pl={{ base: "10px", md: "20px", lg: "30px" }}
                        pr={{ base: "4%", md: "15%", lg: "15%" }}
                        pt={{ base: "10px", md: "14px", lg: "18px" }}
                        pb={{ base: "10px", md: "14px", lg: "18px" }}
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
                            {item.hadithEnglish}
                        </Text>
                    </Box>
                    {/* Reference and save to bookmark btn */}
                    <Box>
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
                                        <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" } }}>book {chapter} , Hadith {item.hadithNumber}</text>
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
                </>
            ))}

        </>
    )
}

export default Hadiths