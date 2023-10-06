import React from 'react'
import {
    FormControl,
    Box,
    Input
} from '@chakra-ui/react'
import HomeBackgroundImg from "../images/bismillah.png"


const HomePageInput = () => {
    return (
        <>
            <Box
                bgImage={HomeBackgroundImg}
                backgroundSize={"cover"}
                // backgroundAttachment={"fixed"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                pl={{ base: "60px", lg: "274px" }}
                pr={{ base: "60px", lg: "274px" }}
                pt={{ base: "190px", md: "250px", lg: "368px" }}
                pb={{ base: "30px", md: "40px", lg: "50px" }}
                objectFit={"cover"}
            >
                <FormControl>
                    <Input
                        // width={"818px"}
                        color={"blackAlpha.300"}
                        bgColor={"#D9D9D9"}
                        placeholder={"What do you want to read ?"}
                        _placeholder={{color:"black"}}
                        type='text'
                    />
                </FormControl>
            </Box>
        </>
    )
}

export default HomePageInput