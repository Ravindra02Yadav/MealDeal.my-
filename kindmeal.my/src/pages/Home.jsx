import React from 'react'
import { Box,Image } from '@chakra-ui/react'
import bigBanner from '../images/bigBanner.png'
import LastestNews from '../components/LastestNews'
import Moments from '../components/Moments'
import Discover from '../components/Discover'


const Home = () => {
  return (
    <>
    <Box ml="120px">
    <Image src={bigBanner} />
    </Box>
    <LastestNews />
    <Moments />
    <Discover />
   
    </>
  )
}

export default Home