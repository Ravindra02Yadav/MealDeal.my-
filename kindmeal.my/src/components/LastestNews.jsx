import React, { useState } from 'react'
import {latestNews} from '../Data/api'
import { Box,Flex, Heading,Text,Spacer,Link } from '@chakra-ui/react'
import Component1 from './Component1'



const LastestNews = () => {
    const [data,setData] = useState(latestNews)
    console.log(data)
  return (
    <>
    <Box ml="120px"  w="80%" boxShadow='2xl' mt="40px">
    <Flex justifyContent='flex-end'>
      <Heading as="h6" size='md' ml="10px" >Latest News & Videos</Heading>
      <Spacer />
      <Flex  fontWeight='bold' justifyContent="space-between" color="blue">
      <Link ml="20px" size='2xl'> Save Lives with Your Blog </Link>
      <Link ml="20px" size='2xl' > News & Articles </Link>
      <Link ml="20px" size='2xl' > News & Articles </Link>
      <Link ml="20px" size='2xl' mr="10px"> Follow Our Facebook </Link>
      
      </Flex>
    </Flex>
    <Flex>
        {data.map(item=>(
            <Component1 image = {item.image} title={item.title}/>
        ))}
        </Flex>
        </Box>
    </>
  )
}

export default LastestNews