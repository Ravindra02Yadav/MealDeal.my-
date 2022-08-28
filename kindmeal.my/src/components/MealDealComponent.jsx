import React from 'react'
import { Grid, GridItem,Image,Heading,Text,Button,Flex,Box,Divider,Center } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'



const MealDealComponent = ({id,image,title,discount,description,subtitle,location,rating,icon1,icon2,expires}) => {
  return (
    <>
<GridItem bg="white" p="20px" borderRadius="10px">
  <Image src={image}/>
  <Flex><Text fontSize="20px" color="gray">{subtitle}</Text>
  <Text color="gray">{location}</Text>
  </Flex>
  <Text>{description}</Text>
  <Flex justifyContent="space-between" >
  <Button bg="tomato" color="white" fontWeight="50px">Get FREE Coupen</Button>
<Box>
<StarIcon color="yellow" />
<StarIcon color="yellow"/>
<StarIcon color="yellow"/>
<StarIcon color="yellow"/>
{rating}
</Box>
  </Flex>
  <Divider mt="1rem"/>
  <Flex p="10px" justifyContent="space-around">

   <Image src={icon1} />
    <Image src={icon2} />
   
    <Center height='50px' p="10px">
  <Divider orientation='vertical' />
  </Center>
  <Box >
<Text>KindMeal Discount</Text>
<Heading as="h6" color="red" fontWeight="10px"  size="lg">{discount} Off</Heading>
  </Box>
  <Center height='50px' p="10px">
  <Divider orientation='vertical' />
  </Center>
  <Box >
<Text>Expires Soon</Text>
<Heading as="h6" color="orange" fontWeight="10px"  size="lg">{expires}</Heading>
  </Box>

  </Flex>
</GridItem>
    </>
  )
}

export default MealDealComponent