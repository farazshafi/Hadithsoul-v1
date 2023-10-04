import { LinkIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer className=' fixed-bottom ' style={{ backgroundColor: "black", paddingTop: "26px", paddingBottom: "26", paddingLeft: "60px", paddingRight: "60px" }}>
        <Container fluid>
          <Row>
            {/* About */}
            <Col sm={12} md={6}>
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
            <Col sm={12} md={6}>
              <Box
                display={"flex"}
                mt={"10px"}
                ml={"auto"}
              >
                <Row>

                  {/* NAVIGATION */}
                  <Col sm={6} md={4}>
                    <Text
                      color={"white"}
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "11px", md: "15px", lg: '18px' }}
                      fontWeight={700}
                    >
                      NAVIGATION
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      color={"white"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }} fontWeight={400}
                    >
                      Home
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      color={"white"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }} fontWeight={400}
                    >
                      Home
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      color={"white"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }} fontWeight={400}
                    >
                      Home
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      color={"white"}
                      fontSize={"15px"}
                      fontWeight={400}
                    >
                      Home
                    </Text>
                  </Col>

                  {/* NETWORK */}
                  <Col sm={6} md={4}>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "11px", md: "15px", lg: '18px' }}
                      fontWeight={700}
                      color={"white"}
                    >
                      NETWORK
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }} fontWeight={400}
                      color={"white"}
                    >
                      Instagram
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }} fontWeight={400}
                      color={"white"}
                    >
                      Facebook
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }} fontWeight={400}
                      color={"white"}
                    >
                      Whatsapp
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }} fontWeight={400}
                      color={"white"}
                    >
                      Youtube
                    </Text>
                  </Col>

                  {/* COLLECTIONS */}
                  <Col sm={12} md={4}>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "11px", md: "15px", lg: '18px' }}
                      color={"white"}
                      width={"130px"}
                      fontWeight={700}
                    >
                      COLLECTIONS
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }}
                      color={"white"} fontWeight={400}
                      width={"130px"}
                    >
                      Sahih al-Bukhari
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }}
                      color={"white"}
                      fontWeight={400}
                      width={"130px"}
                    >
                      Sahih al-Bukhari
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }}
                      color={"white"}
                      fontWeight={400}
                      width={"130px"}
                    >
                      Sahih al-Bukhari
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }}
                      color={"white"}
                      fontWeight={400}
                      width={"130px"}
                    >
                      Sahih al-Bukhari
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }}
                      color={"white"}
                      fontWeight={400}
                      width={"130px"}
                    >
                      Sahih al-Bukhari
                    </Text>
                    <Text
                      fontFamily={"Istok Web"}
                      fontSize={{ base: "9px", md: "12", lg: "15px" }}
                      fontWeight={400}
                      width={"130px"}
                      color={"white"}
                    >
                      Sahih al-Bukhari
                    </Text>
                  </Col>

                </Row>
              </Box>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer