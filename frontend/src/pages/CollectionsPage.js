import React from 'react'
import GoBackBtn from '../components/GoBackBtn'
import { Text, Box, Button } from '@chakra-ui/react'
import BetweenLine from '../components/BetweenLine'
import AboutBook from '../components/AboutBook'
import Collections from '../components/Collections'

import ShortProfileImam from '../components/ShortProfileImam'

const CollectionsPage = () => {
    return (
        <>
            <GoBackBtn page={"Home"} />
            <ShortProfileImam profilePage={false} />
            <BetweenLine />
            <AboutBook />
            <Collections />
            <BetweenLine />
        </>
    )
}

export default CollectionsPage