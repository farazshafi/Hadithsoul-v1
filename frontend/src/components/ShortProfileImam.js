import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Text, Box, Button } from '@chakra-ui/react'


const ShortProfileImam = ({ profilePage }) => {

    const navigate = useNavigate()

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
                    textDecoration={"underline"}
                >
                    Sahih al-Bukhari
                </Text>
                <Text
                    fontFamily={"Inter"}
                    fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                    color={"white"}
                    fontWeight={400}
                    textAlign={"center"}
                >
                    Sahih al-Bukhari is a collection of hadith compiled by Imam Muhammad al-Bukhari (d. 256 AH/870 AD) (rahimahullah). His collection is recognized by the overwhelming majority of the Muslim world to be the most authentic collection of reports of the Sunnah of the Prophet Muhammad (ﷺ). It contains over 7500 hadith (with repetitions) in 97 books. The translation provided here is by Dr. M. Muhsin Khan.
                </Text>
                {profilePage ?
                    (<></>)
                    :
                    (
                        <Box display="flex" justifyContent="flex-end">
                            <Button
                                onClick={() => { navigate("/collections/bukhari/about") }}
                                color={"white"}
                                size={{ base: "sm", md: "md", lg: "lg" }} bg={"#272F33"}>
                                Read More
                            </Button>
                        </Box >
                    )
                }

            </Box >
        </>
    )
}

export default ShortProfileImam