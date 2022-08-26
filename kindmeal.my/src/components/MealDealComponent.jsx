import React from 'react'
import { Grid, GridItem,Image,Heading,Text,Button,Flex } from '@chakra-ui/react'

const MealDealComponent = ({id,image,title,discount,description,subtitle,location,rating,icon1,icon2,expires}) => {
  return (
    <>
<GridItem bg="white">
  <Image src={image}/>
  <Flex><Text fontSize="20px" color="gray">{subtitle}</Text>
  <Text color="gray">{location}</Text>
  </Flex>
  <Text>{description}</Text>
  <Button bg="tomato" color="white" fontWeight="50px">Get FREE Coupen</Button>
</GridItem>
    </>
  )
}

export default MealDealComponent