import { LinkIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer className='' style={{ backgroundColor: "black", paddingTop: "26px", paddingBottom: "26", paddingLeft: "60px", paddingRight: "60px" }}>
        <Box
        pl={{base:"px",md:"50",lg:"60px"}}
        pr={{base:"px",md:"50",lg:"60px"}}
        >
          <Row>
            {/* About */}
            <Col md={6}>
              <Box>
                <Text
                  fontFamily={"Istok Web"}
                  fontSize={{ base: "30px", md: "40px", lg: '60px' }}
                  fontWeight={700}
                  color={"white"}
                >
                  Qurancisoul
                </Text>
                <Text
                  fontFamily={"Istok Web"}
                  fontSize={{ base: "10px", md: "15px", lg: '20px' }}
                  fontWeight={400}
                  color={"white"}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </Text>
                <Box
                  height={"5px"}
                  width={"100%"}
                  bg={"#D9D9D9"}
                  mb={"10px"}
                ></Box>
              </Box>
            </Col>
            {/* Links */}
            <Col md={6}>
              <Box className='flex-row-reverse'
                display={"flex"}
                mt={"10px"}
                pl={{ base: "0px", md: "0px", lg: "20px" }}
              >
                <Row>
                  {/* NAVIGATION */}
                  <Col xs={6} sm={6} md={4}>
                    <Box>
                      <Text
                        color={"white"}
                        fontFamily={"Istok Web"}
                        fontSize={{ base: "15px", md: "18px", lg: '20px' }}
                        fontWeight={700}
                      >
                        NAVIGATION
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        Home
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        Home
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        Home
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        Home
                      </Text>
                    </Box>

                  </Col>

                  {/* NETWORK */}
                  <Col xs={6} sm={6} md={4}>
                    <Box>
                      <Text
                        fontFamily={"Istok Web"}
                        fontSize={{ base: "18px", md: "15px", lg: '20px' }}
                        fontWeight={700}
                        width={"100px"}
                        color={"white"}
                      >
                        NETWORK
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                        color={"white"}
                      >
                        Instagram
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                        color={"white"}
                      >
                        Facebook
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                        color={"white"}
                      >
                        Whatsapp
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                        color={"white"}
                      >
                        Youtube
                      </Text>
                    </Box>
                  </Col>

                  {/* COLLECTIONS */}
                  <Col xs={12} sm={12} md={4}>
                    <Box>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "15px", md: "18px", lg: '20px' }}
                        color={"white"}
                        width={"150px"}
                        fontWeight={700}
                      >
                        COLLECTIONS
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15", lg: "15px" }}
                        color={"white"} fontWeight={400}
                        width={"130px"}
                      >
                        Sahih al-Bukhari
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                        color={"white"}
                        fontWeight={400}
                        width={"130px"}
                      >
                        Sahih al-Bukhari
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                        color={"white"}
                        fontWeight={400}
                        width={"130px"}
                      >
                        Sahih al-Bukhari
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                        color={"white"}
                        fontWeight={400}
                        width={"130px"}
                      >
                        Sahih al-Bukhari
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                        color={"white"}
                        fontWeight={400}
                        width={"130px"}
                      >
                        Sahih al-Bukhari
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }}
                        fontWeight={400}
                        width={"130px"}
                        color={"white"}
                      >
                        Sahih al-Bukhari
                      </Text>
                    </Box>
                  </Col>

                </Row>
              </Box>
            </Col>
          </Row>
        </Box>
      </footer>
    </>
  )
}

export default Footer