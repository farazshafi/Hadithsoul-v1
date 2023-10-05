import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Row, Col, Container, } from 'react-bootstrap'

const Collections = () => {
    return (
        <>
            <Box
                // pt={"50px"}
                pl={{ base: "27px", md: "50px", lg: "92px" }}
                pr={{ base: "27px", md: "50px", lg: "92px" }}
                bg={"#1F2125"}
                // pb={"30px"}
            >
                <Text
                    fontFamily={"Inter"}
                    textAlign={{ base: "center", md: "start", lg: "start" }}
                    fontSize={{ base: "16px", md: "15px", lg: "20px" }}
                    fontWeight={700}
                    color={"white"}
                >
                    SIX MOST AUTHENTIC COLLECTIONS OF AHADITH
                </Text>
                <Row>
                    <Col sm={6} md={4}>
                        <Button
                            mt={"15px"}
                            width={"100%"}
                            color={"blackAlpha.800"}
                            bgColor={"#D9D9D9"}
                            variant={"solid"}
                        >
                            sahih al-bukhari
                        </Button>
                    </Col>
                    <Col sm={6} md={4}>
                        <Button
                            mt={"15px"}
                            width={"100%"}
                            color={"blackAlpha.800"}
                            bgColor={"#D9D9D9"}
                            variant={"solid"}
                        >
                            sahih al-bukhari
                        </Button>
                    </Col>
                    <Col sm={6} md={4}>
                        <Button
                            mt={"15px"}
                            width={"100%"}
                            color={"blackAlpha.800"}
                            bgColor={"#D9D9D9"}
                            variant={"solid"}
                        >
                            sahih al-bukhari
                        </Button>
                    </Col>
                    <Col sm={6} md={4}>
                        <Button
                            mt={"15px"}
                            width={"100%"}
                            color={"blackAlpha.800"}
                            bgColor={"#D9D9D9"}
                            variant={"solid"}
                        >
                            sahih al-bukhari
                        </Button>
                    </Col>
                    <Col sm={6} md={4}>
                        <Button
                            mt={"15px"}
                            width={"100%"}
                            color={"blackAlpha.800"}
                            bgColor={"#D9D9D9"}
                            variant={"solid"}
                        >
                            sahih al-bukhari
                        </Button>
                    </Col>
                </Row>
            </Box>

        </>
    )
}

export default Collections