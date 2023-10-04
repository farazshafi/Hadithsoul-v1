import React from 'react'
import { Text, Box } from "@chakra-ui/react"
import HomePageInput from '../components/HomePageInput'
import { Row, Col } from 'react-bootstrap'
import RecentRead from '../components/RecentRead'

const HomePage = () => {
  return (
    <>
      <HomePageInput />
      <RecentRead />
    </>
  )
}

export default HomePage