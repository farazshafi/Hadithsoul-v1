import React from 'react'
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { SearchIcon, SunIcon } from "@chakra-ui/icons"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Header = () => {
  return (
    <>
      <header>
        <Box
          bg={'#242424'}
          height={"65px"}
          display={"flex"}
          pl={{ base: "15px", md: "50px", lg: "50px" }}
          pr={{ base: "15px", md: "50px", lg: "50px" }}
          pt={17}
        >
          <Text
            fontFamily={"Istok Web"}
            fontWeight={700}
            fontSize={"20px"}
            width={'auto'}
            color={"white"}
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