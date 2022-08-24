import React from 'react'
import { Box,Image } from '@chakra-ui/react'
import image from '../images/bigBanner.png'

const Home = () => {
  return (
    <>
    <Box ml="120px">
    <Image src={image} />
    </Box>

    </>
  )
}

export default Home