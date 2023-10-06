import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import React from 'react'

const AboutBook = () => {
    return (
        <>
            {/* option two */}
            {/* <Box
                bg={"#1F2125"}
                pl={{ base: "0px", md: "91px", lg: "91px" }}
                pr={{ base: "0px", md: "91px", lg: "91px" }}
                pb={{ base: "30px", md: "78px", lg: "78px" }}
            >
                <Box
                    bg={"#242424"}
                >
                    <Table size={{ base: "sm", md: "md", lg: "lg" }}>
                        <Thead>
                            <Tr>
                                <Th color={"white"} textAlign={"center"}>Book</Th>
                                <Th color={"white"} textAlign={"center"}>Title</Th>
                                <Th color={"white"} textAlign={"center"}>Starting</Th>
                                <Th color={"white"} textAlign={"center"}>Ending</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>01</Td>
                                <Td color={"white"} textAlign={"center"}>Revelation</Td>
                                <Td color={"white"} textAlign={"center"}>1</Td>
                                <Td color={"white"} textAlign={"center"}>7</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>02</Td>
                                <Td color={"white"} textAlign={"center"}>Belief</Td>
                                <Td color={"white"} textAlign={"center"}>08</Td>
                                <Td color={"white"} textAlign={"center"}>08</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>03</Td>
                                <Td color={"white"} textAlign={"center"}>Knowledge</Td>
                                <Td color={"white"} textAlign={"center"}>594</Td>
                                <Td color={"white"} textAlign={"center"}>594</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>04</Td>
                                <Td color={"white"} textAlign={"center"}>Ablutions</Td>
                                <Td color={"white"} textAlign={"center"}>2474</Td>
                                <Td color={"white"} textAlign={"center"}>2474</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>04</Td>
                                <Td color={"white"} textAlign={"center"}>Ablutions</Td>
                                <Td color={"white"} textAlign={"center"}>34335</Td>
                                <Td color={"white"} textAlign={"center"}>333446</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>04</Td>
                                <Td color={"white"} textAlign={"center"}>Dont be sad ok you will never alone </Td>
                                <Td color={"white"} textAlign={"center"}>34330</Td>
                                <Td color={"white"} textAlign={"center"}>33460</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Box> */}

            {/* option one */}
            <Box
                bg={"#1F2125"}
                pl={{ base: "25px", md: "91px", lg: "91px" }}
                pr={{ base: "25px", md: "91px", lg: "91px" }}
                pb={{ base: "30px", md: "78px", lg: "78px" }}
            >
                <Box
                    bg={"#242424"}
                >
                    <Table size={{ base: "sm", md: "md", lg: "lg" }}>
                        <Thead>
                            <Tr>
                                <Th color={"white"} textAlign={"center"}>Book</Th>
                                <Th color={"white"} textAlign={"center"}>Title</Th>
                                <Th color={"white"} textAlign={"center"}>Starting</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>01</Td>
                                <Td color={"white"} textAlign={"center"}>Revelation</Td>
                                <Td color={"white"} textAlign={"center"}>1/9</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>02</Td>
                                <Td color={"white"} textAlign={"center"}>Belief</Td>
                                <Td color={"white"} textAlign={"center"}>10/99</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>03</Td>
                                <Td color={"white"} textAlign={"center"}>Knowledge</Td>
                                <Td color={"white"} textAlign={"center"}>100/900</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>04</Td>
                                <Td color={"white"} textAlign={"center"}>Ablutions</Td>
                                <Td color={"white"} textAlign={"center"}>1000/9999</Td>
                            </Tr>
                            <Tr>
                                <Td color={"white"} textAlign={"center"}>04</Td>
                                <Td color={"white"} textAlign={"center"}>Ablutions</Td>
                                <Td color={"white"} textAlign={"center"}>10000,99000</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </>
    )
}

export default AboutBook