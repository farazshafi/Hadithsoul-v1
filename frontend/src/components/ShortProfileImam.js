import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Text, Box, Button, Spinner, useToast } from '@chakra-ui/react'
import axios from 'axios'
import Loader from './Loader'


const ShortProfileImam = ({ profilePage, name }) => {

    const [writerName, setWriterName] = useState("muslim")
    const [loading, setLoading] = useState(false)

    const toast = useToast()


    const getCollectionsDetails = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/sunna/getCollectionsHadith/${name}/book/1`)
            console.log(data)
            const writername = data[0].book.writerName
            setWriterName(writername)
            setLoading(false)
        } catch (error) {
            toast({
                title: 'Invalid URL.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            console.log(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getCollectionsDetails()
    }, []);

    return (

        <>
            <Box
                pl={{ base: "30px", md: "92px", lg: "92px" }}
                pr={{ base: "30px", md: "92px", lg: "92px" }}
                bg={"#1F2125"}
            >
                <Text
                    fontFamily={"Istok Web"}
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    color={"white"}
                    fontWeight={700}
                    textAlign={"center"}
                    mb={0}
                    textDecoration={"underline"}
                >
                    {loading ? (
                        <Loader />
                    ) : (
                        writerName
                    )}
                </Text>
                {/* shortIntro */}
                {/* <Text
                    fontFamily={"Inter"}
                    fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                    color={"white"}
                    fontWeight={400}
                    textAlign={"center"}
                >
                    
                </Text> */}
                {profilePage ?
                    (<></>)
                    :
                    (
                        <>
                            {/* <Box display="flex" justifyContent="flex-end">
                            <Button
                                onClick={() => { navigate(`/collections/${name}/about`) }}
                                color={"white"}
                                size={{ base: "sm", md: "md", lg: "lg" }} bg={"#272F33"}>
                                Read More
                            </Button>
                        </Box > */}
                        </>

                    )
                }

            </Box >
        </>
    )
}

export default ShortProfileImam