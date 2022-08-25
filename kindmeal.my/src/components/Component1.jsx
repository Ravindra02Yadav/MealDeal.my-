import React from 'react'
import { Box, Heading, Flex, Image,Text } from '@chakra-ui/react'

const Component1 = ({image,title}) => {
  return (
    <>
    
    <Box>
<Image borderRadius="1rem" boxSize='220px' p="12px" objectFit='cover' src={image} />
<Text fontSize="sm" color="gray" w="70%">{title}</Text>
</Box>
    </>
  )
}

export default Component1