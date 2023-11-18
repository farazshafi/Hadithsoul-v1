import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Text, Box, Button, Spinner, useToast } from '@chakra-ui/react'
import Loader from './Loader'
import Offline from "../components/Offline"
import aboutBookhari from "../data/imam details/bookhariDetails"
import aboutMuslim from "../data/imam details/muslimDetails"


const ShortProfileImam = ({ profilePage, name }) => {

    const [writerName, setWriterName] = useState("")
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)

    const toast = useToast()


    const getCollectionsDetails = async () => {
        try {
            setLoading(true)
            setInternet(true)
            if (name === "bukhari") {
                const writer = aboutBookhari.collection[0].title
                setWriterName(writer)
            }
            if (name === "muslim") {
                const writer = aboutMuslim.collection[0].title
                setWriterName(writer)
            }
            setLoading(false)
        } catch (error) {
            setInternet(false)
            toast({
                title: 'Check You Connection.',
                status: 'error',
                duration: 5000,
                position: "top-left",
                isClosable: true,
            })
            console.log(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        // const storedBukhariName = JSON.parse(localStorage.getItem("bukhari-name"))
        // const storedMuslimName = JSON.parse(localStorage.getItem("muslim-name"))
        // const storedTirmidhiName = JSON.parse(localStorage.getItem("tirmidhi-name"))
        // const storedDawoodName = JSON.parse(localStorage.getItem("dawood-name"))
        // const storedMajahName = JSON.parse(localStorage.getItem("majah-name"))
        // const storedNasaiName = JSON.parse(localStorage.getItem("nasai-name"))
        // const storedMishkatName = JSON.parse(localStorage.getItem("mishkat-name"))
        // const storedAhmadName = JSON.parse(localStorage.getItem("ahmad-name"))
        // const storedSahihaName = JSON.parse(localStorage.getItem("sahiha-name"))

        // if (name === "sahih-bukhari") {
        //     if (storedBukhariName) {
        //         setWriterName(storedBukhariName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "sahih-muslim") {
        //     if (storedMuslimName) {
        //         setWriterName(storedMuslimName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "al-tirmidhi") {
        //     if (storedTirmidhiName) {
        //         setWriterName(storedTirmidhiName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "abu-dawood") {
        //     if (storedDawoodName) {
        //         setWriterName(storedDawoodName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "ibn-e-majah") {
        //     if (storedMajahName) {
        //         setWriterName(storedMajahName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "sunan-nasai") {
        //     if (storedNasaiName) {
        //         setWriterName(storedNasaiName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "mishkat") {
        //     if (storedMishkatName) {
        //         setWriterName(storedMishkatName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "musnad-ahmad") {
        //     if (storedAhmadName) {
        //         setWriterName(storedAhmadName)
        //     } else getCollectionsDetails()
        // }

        // if (name === "al-silsila-sahiha") {
        //     if (storedSahihaName) {
        //         setWriterName(storedSahihaName)
        //     } else getCollectionsDetails()
        // }
        getCollectionsDetails()
    }, []);

    return (

        <>
            <Box
                pl={{ base: "30px", md: "92px", lg: "92px" }}
                pr={{ base: "30px", md: "92px", lg: "92px" }}
                bg={"#1F2125"}
            >
                {internet ? (
                    <>
                        <Box
                            display={"flex"}
                        >
                            <Box ml={"auto"} mr={"auto"}>
                                <Button
                                    bg={"#272F33"}
                                    color={"white"}
                                    borderRadius={"0px"}
                                    textAlign={"center"}
                                    _hover={{ bg: "white", color: "black" }}
                                    size={{ lg: "lg", md: "md", base: "sm" }}
                                >{writerName}
                                </Button>
                            </Box>
                        </Box>

                        <Text
                            fontFamily={"Istok Web"}
                            fontSize={{ base: "15px", md: "25px", lg: "30px" }}
                            color={"black"}
                            ml={"auto"}
                            fontWeight={700}
                            textAlign={"center"}
                            mb={0}
                        // textDecoration={"underline"}
                        >
                            {loading && (
                                <Loader />
                            )}
                        </Text>
                    </>
                ) : (
                    <Offline />
                )}

                {/* shortIntro */}
                {/* <Text
                    fontFamily={"Inter"}
                    fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                    color={"white"}
                    fontWeight={400}
                    textAlign={"center"}
                >
                    
                </Text> */}
                {/* {profilePage ?
                    (<></>)
                    :
                    (
                        <>
                            <Box display="flex" justifyContent="flex-end">
                                <Button
                                    onClick={() => { navigate(`/collections/${name}/about`) }}
                                    color={"white"}
                                    size={{ base: "sm", md: "md", lg: "lg" }} bg={"#272F33"}>
                                    Read More
                                </Button>
                            </Box >
                        </>

                    )
                } */}

            </Box >
        </>
    )
}

export default ShortProfileImam