import React, { useState } from 'react'
import {moments} from '../Data/api'
import { Box,Flex, Heading,Text,Spacer,Link } from '@chakra-ui/react'
import Component1 from './Component1'



const Moments = () => {
    const [data,setData] = useState(moments)
    console.log(data)
  return (
    <>
    <Box ml="120px"  w="80%" boxShadow='2xl' mt="40px">
    <Flex justifyContent='flex-end'>
      <Heading as="h6" size='md' ml="10px" >Yummylicious Moments</Heading>
      <Spacer />
      <Flex  fontWeight='bold' justifyContent="space-between" color="blue">
      <Link ml="20px" size='2xl'> Secret Recipes  </Link>
      <Link ml="20px" size='2xl' > Member Hot Picks   </Link>
      <Link ml="20px" size='2xl' > Photo Moments </Link>
   
      
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

export default Moments