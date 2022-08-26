import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box, Image, Button, Divider, Center } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai' 

const Navbar = () => {
  return (
    <>
<Flex w="90%" justifyContent="space-around" ml="50px">
    <Box><Image src="https://www.kindmeal.my/images/logo-kindmeal.png"/></Box>
    <Box>
        <Flex justifyContent="space-between" >
    <Box ml="10px" mt="20px"><Icon as={FaLink}  fontSize="40px" color="#cdcdcd" /></Box>
    <Box ml="10px" mt="20px"><Icon as={FaFacebook} fontSize="40px" color="#cdcdcd" /></Box>
    <Box ml="10px" mt="20px"><Icon as={AiFillTwitterCircle} fontSize="40px" color="#cdcdcd" /></Box>

      </Flex>
    </Box>
    <Flex p = "10px" m="10px">
<Box ml="10px">Login</Box>
<Box ml="10px"><Button colorScheme='facebook' size='sm'>Facebook</Button></Box>
<Box ml="10px">  <Button bgColor="#666666" color="white" size='sm'>Email</Button></Box>
<Center ml="10px" height='30px'>
  <Divider orientation='vertical' />
</Center>
<Box ml="10px">Signup</Box>
    </Flex>
    
</Flex>
<Flex bg="#2bb673" color="white" justifyContent="space-around" h="35px">
    <Box fontSize="xl" ml="80px"><Link to="/">Home</Link></Box>
    <Box fontSize="xl"><Link to="/MealDeal">Meal Deals</Link></Box>
    <Box fontSize="xl"><Link to="/MealDeal">KindMoments</Link></Box>
    <Box fontSize="xl"><Link to="/MealDeal">Hot Picks</Link></Box>
    <Box fontSize="xl"><Link to="/MealDeal">Recipes</Link></Box>
    <Box fontSize="xl"><Link to="/MealDeal">Directory</Link></Box>
    <Box fontSize="xl"><Link to="/MealDeal">Articles</Link></Box>
    <Box fontSize="xl" mr="120px"><Link to="/MealDeal">Helps</Link></Box>
</Flex>
    </>
  )
}

export default Navbar