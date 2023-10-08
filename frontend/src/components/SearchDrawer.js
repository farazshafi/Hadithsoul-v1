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
    Box
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const handleSearch = () => { 
        console.log("Search")
    }

    return (
        <>
            <SearchIcon
                color={"white"}
                boxSize={8}
                onClick={onOpen}
                ref={btnRef}
            />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Search for Hadith</DrawerHeader>
                    <DrawerBody>
                        <Box
                            display={"flex"}
                        >
                            <Input mr={2} placeholder='Search here..' />
                            <Button onClick={handleSearch}>Go</Button>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SearchDrawer