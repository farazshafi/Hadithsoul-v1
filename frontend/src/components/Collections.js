import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Row, Col, Container, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import OtherHadith from './OtherHadith'

const Collections = ({directcall}) => {

    const navigate = useNavigate()

    return (
        <>
        {directcall && (
            <OtherHadith directcall={true} />
        )}
            <Box
                id='collection'
                pl={{ base: "35px", md: "50px", lg: "92px" }}
                pr={{ base: "35px", md: "50px", lg: "92px" }}
                bg={"#1F2125"}
                pb={"20px"}
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
                            onClick={() => navigate("/collections/bukhari")}
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
                            onClick={() => navigate("/collections/bukhari")}
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
                            onClick={() => navigate("/collections/bukhari")}
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
                            onClick={() => navigate("/collections/bukhari")}
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
                            onClick={() => navigate("/collections/bukhari")}
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
                            onClick={() => navigate("/collections/bukhari")}
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