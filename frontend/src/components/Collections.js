import { Box, Text, Button, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Row, Col, Container, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import OtherHadith from './OtherHadith'
import BetweenLine from './BetweenLine'
import GoBackBtn from './GoBackBtn'
import axios from "axios"
import Lottie from "lottie-react"
import animationLoading from "../animations/loading.json"

const Collections = ({ directcall }) => {
    const [collections, setCollections] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const getCollectionsName = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get("/api/sunna/getCollectionsName")
            setCollections(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getCollectionsName()
    }, []);

    // lottie styles
    const lottieStyleLoading = {
        width: "100%",
        // marginBottom: 5,
        // marginLeft: 0
    }
    return (
        <>
            {directcall && (
                <>
                    <GoBackBtn page={"Collections"} />
                    <OtherHadith directcall={true} />
                    <BetweenLine />
                </>
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
                    {loading ? (
                        <>
                            <Box
                            pt={"20px"}
                            display={"flex"}
                            >
                               
                                <Spinner
                                    size={{lg:"xl",base:"xs",md:"lg"}}
                                    color='white'
                                    w={20}
                                    h={20}
                                    alignSelf={'center'}
                                    margin={"auto"}
                                />
                            </Box>


                        </>
                    ) : (
                        collections.map((imam) => (
                            <Col sm={6} md={4}>
                                <Button
                                    onClick={() => navigate(`/collections/${imam.name}`)}
                                    mt={"15px"}
                                    width={"100%"}
                                    color={"blackAlpha.800"}
                                    bgColor={"#D9D9D9"}
                                    variant={"solid"}
                                >
                                    {imam.name}
                                </Button>
                            </Col>
                        ))
                    )}

                </Row>
            </Box>
            {directcall && (
                <BetweenLine />
            )}
        </>
    )
}

export default Collections
