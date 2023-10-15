import { Box, Text, Button, Spinner, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Row, Col, Container, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import OtherHadith from './OtherHadith'
import BetweenLine from './BetweenLine'
import GoBackBtn from './GoBackBtn'
import axios from "axios"
import Loader from "../components/Loader"
import Offline from "../components/Offline"
// import Lottie from "lottie-react"
// import animationLoading from "../animations/loading.json"

const Collections = ({ directcall }) => {
    const [collections, setCollections] = useState([])
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)

    const navigate = useNavigate()
    const toast = useToast()

    const getCollectionsName = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get("/api/sunna/getCollectionsName")
            setInternet(true)
            // console.log(data[0].bookName)
            setCollections(data)
            setLoading(false)
        } catch (error) {
            setInternet(false)
            toast({
                title: 'Check You Connection.',
                status: 'error',
                duration: 7000,
                position: "top-left",
                isClosable: true,
            })
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
                {internet ? (
                    <>
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
                                <Loader />
                            ) : (
                                collections && collections.map((imam) => (
                                    <Col sm={6} md={4}>
                                        <Button
                                            onClick={() => navigate(`/collections/${imam.bookSlug}`)}
                                            mt={"15px"}
                                            width={"100%"}
                                            color={"blackAlpha.800"}
                                            bgColor={"#D9D9D9"}
                                            variant={"solid"}
                                        >
                                            {imam.bookName}
                                        </Button>
                                    </Col>
                                ))
                            )}

                        </Row>
                    </>
                ) : (
                    <Offline />
                )}

            </Box>
            {directcall && (
                <BetweenLine />
            )}
        </>
    )
}

export default Collections
