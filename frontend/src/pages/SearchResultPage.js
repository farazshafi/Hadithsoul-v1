import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GoBackBtn from '../components/GoBackBtn'
import BetweenLine from '../components/BetweenLine'
import Hadiths from '../components/Hadiths'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import HomePageInput from '../components/HomePageInput'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Offline from "../components/Offline"
import ReadMore from "../components/ReadMore"

const SearchResultPage = () => {
  const [loading, setLoading] = useState(false)
  const [bookName, setBookName] = useState([])
  const [hadith, setHadith] = useState(true)

  const params = useParams()
  const toast = useToast()
  const keyword = params.keyword

  const fetchSearchResult = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/sunna/getSearchedHadith/${keyword}`)
      setBookName(data)
      setHadith(true)
      setLoading(false)
    } catch (error) {
      setHadith(false)
      console.log(error.data)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSearchResult()
  }, [keyword]);

  return (
    <>
      <HomePageInput />
      <GoBackBtn page={"Search"} />
      <Box
        pl={{ base: "30px", md: "91px", lg: "91px" }}
        pr={{ base: "30px", md: "91px", lg: "91px" }}
        // pb={"40px"}
        bg={"#1F2125"}
      >
        <Text
          fontFamily={"Istok Web"}
          textAlign={"center"}
          color={"white"}
          fontSize={{ base: "lg", md: "lg", lg: "xx-large" }}
          pt={{ base: "15px", md: "30px", lg: "40px" }}
          fontWeight={700}
        >SEARCH RESULT</Text>
        <BetweenLine />
        {loading && <Loader />}
        {!hadith && (
          <>
            <Box>
              <Text
                textAlign={"center"}
                fontFamily={"Inter"}
                fontSize={{ lg: "30px", md: "25px", sm: "10px" }}
                mb={0}
                pb={{ base: "15px", md: "30px", lg: "40px" }}
              >
                Hadith Not Found
              </Text>
            </Box>
          </>)}
        {hadith && (
          <>
            {bookName && bookName.map((item) => (
              <>
                {/* Book */}
                <Box
                  // pl={{ base: "30px", md: "91px", lg: "91px" }}
                  pb={"10px"}
                >
                  <Button
                    bg={"white"}
                    color={"black"}
                    borderRadius={"0px"}
                    _hover={{ bg: "#272F33", color: "white" }}
                    size={{ lg: "lg", md: "md", base: "sm" }}
                  // fontFamily={"Istok Web"}
                  >{item.book.bookName}
                  </Button>
                </Box>
                {/* Chapter */}
                <Box
                  bg={"#242424"}
                  pl={{ base: "20px", md: "18px", lg: "15px" }}
                  pr={{ base: "20px", md: "18px", lg: "15px" }}
                  pt={{ base: "8px", md: "12px", lg: "15px" }}
                  pb={{ base: "8px", md: "12px", lg: "15px" }}
                  mb={"25px"}
                  data-aos="fade-up"
                  data-aos-duration="700"

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
                  data-aos="fade-left"
                  data-aos-duration="700"
                >
                  <Text
                    fontFamily={"Inter"}
                    fontSize={{ lg: "25px", md: "22px", base: "15px" }}
                    fontWeight={700}
                    textAlign={"end"}
                    color={"white"}
                  >
                    <ReadMore text={item.hadithArabic} />
                    {/* {item && item.hadithArabic} */}
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
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <Text
                    color={"black"}
                    fontSize={{ lg: "20px", md: "18px", base: "15px" }}
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                    mb={{ base: "10px", lg: "15px", md: "8px" }}
                  >
                    {item && item.englishNarrator}
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
                <Box>
                  <Row>
                    <Col sm={12} md={6}>
                      <Box>
                        <Text
                          color={"white"}
                        >
                          <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>Reference :</text>
                          <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" }, fontWeight: "400" }}>{item.book.bookName}-{item.hadithNumber}</text>
                        </Text>
                        <Text
                          color={"white"}
                        >
                          {/* <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>In-book reference : </text> */}
                          {/* <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" } }}>{item.chapter.chapterNumber} , Hadith 30</text> */}
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
        )}

      </Box>
    </>
  )
}

export default SearchResultPage