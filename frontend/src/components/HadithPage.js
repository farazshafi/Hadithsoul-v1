import React from 'react'
import GoBackBtn from './GoBackBtn'
import { Box} from '@chakra-ui/react'

import Hadiths from './Hadiths'

const HadithPage = () => {
    return (
        <>
            <GoBackBtn page={"Hadith"} />
            <Box
                bg={"#1F2125"}
                pl={{ base: "20px", md: "50px", lg: "108px" }}
                pr={{ base: "20px", md: "50px", lg: "108px" }}
            >
                <Hadiths />
            </Box>

        </>
    )
}

export default HadithPage