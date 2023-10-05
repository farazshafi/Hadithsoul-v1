import React from 'react'
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { HamburgerIcon, SearchIcon, SunIcon } from "@chakra-ui/icons"
import { Avatar} from '@chakra-ui/react'

const Header = () => {
  return (
    <>
      <header>
        <Box
          bg={'#242424'}
          height={"65px"}
          display={"flex"}
          pl={{ base: "20px", md: "40px", lg: "40px" }}
          pr={{ base: "20px", md: "40px", lg: "40px" }}
          pt={17}
        >
          <HamburgerIcon
          color={"white"}
          boxSize={7}
          />
          <Text
            fontFamily={"Istok Web"}
            fontWeight={700}
            fontSize={"20px"}
            width={'auto'}
            color={"white"}
            ml={"10px"}
          >Quranicsoul</Text>
          {/* ToggleColorMode */}
          <Box
            ml={"auto"}
          >
            {/* <SunIcon
              ml={"auto"}
              color={"white"}
              boxSize={8}
            /> */}
          </Box>


          {/* Avatar */}
          <Box
            ml={{ base: "17px", md: "23px", lg: "25px" }}
          >
            <Wrap>
              <WrapItem>
                <Avatar
                  size={"sm"}
                  name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
              </WrapItem>
            </Wrap>
          </Box>
          {/* search btn */}
          <SearchIcon
            ml={{ base: "17px", md: "23px", lg: "25px" }}
            color={"white"}
            boxSize={8}
          />
        </Box>
      </header>
    </>
  )
}

export default Header