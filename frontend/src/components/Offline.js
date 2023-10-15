import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Offline = () => {
    return (
        <>
            <Box>
                <Text
                    textAlign={"center"}
                    fontFamily={"Inter"}
                    fontSize={{ lg: "xl", md: "lg", sm: "md" }}
                    color={"white"}
                    mb={0}
                    fontWeight={700}
                >Check Your Internet</Text>
                <Text
                    textAlign={"center"}
                    mb={0}
                    color={"white"}
                    pb={"50px"}

                >Try again.</Text>
            </Box>
        </>
    )
}

export default Offline