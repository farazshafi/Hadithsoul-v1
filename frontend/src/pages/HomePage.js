import React from 'react'
import { Text, Box, Button } from "@chakra-ui/react"
import HomePageInput from '../components/HomePageInput'
import RecentRead from "../components/RecentRead"
import BetweenLine from '../components/BetweenLine'
import OtherHadith from '../components/OtherHadith'
import Collections from '../components/Collections'
import ScrollToTopButton from '../components/ScrollToTopButton'

const HomePage = () => {
  return (
    <>
      <HomePageInput />
      {/* <RecentRead />
      <BetweenLine /> */}
      <OtherHadith />
      <BetweenLine />
      <Collections />
      <BetweenLine />
    </>
  )
}

export default HomePage