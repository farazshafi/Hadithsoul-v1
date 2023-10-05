import React from 'react'
import { Text, Box, Button } from "@chakra-ui/react"
import HomePageInput from '../components/HomePageInput'

import BetweenLine from '../components/BetweenLine'
import OtherHadith from '../components/OtherHadith'
import Collections from '../components/Collections'

const HomePage = () => {
  return (
    <>
      <HomePageInput />
      {/* <RecentRead /> */}
      {/* <BetweenLine /> */}
      <OtherHadith />
      <BetweenLine />
      <Collections />
      <BetweenLine />


    </>
  )
}

export default HomePage