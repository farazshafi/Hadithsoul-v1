import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Box,
    Text,
    Link
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const MoreDrawer = () => {

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box
                onClick={onOpen}
            >
                <HamburgerIcon
                    color={"white"}
                    boxSize={7}
                />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Quranicsoul.com</DrawerHeader>
                    <DrawerBody>
                        <Box
                            borderBottom={"1px"}
                        >
                            <Text
                                fontFamily={"Istok Web"}
                                fontSize={{ lg: "lg", sm: "sm" }}
                            >
                                Menu</Text>
                        </Box>
                        {/* Home */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} href='/'>
                                <i style={{ marginTop: "3px", }} class="fa-solid fa-house "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Home</Text>
                            </Link>
                        </Box>
                        {/* collections */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} href='#collection'>
                                <i style={{ marginTop: "3px", }} class="fa-solid fa-users "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Collections</Text>
                            </Link>
                        </Box>
                        {/* About */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} href='/about'>
                                <i style={{ marginTop: "3px", }} class="fa-solid fa-circle-info "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >About</Text>
                            </Link>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MoreDrawer