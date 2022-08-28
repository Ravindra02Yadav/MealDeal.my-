import React from 'react'
import { Box,Image,Flex,Text,Heading,Center,Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
    
<Box bg="#e0e0e0">
    <Image src="https://www.kindmeal.my/images/how_kindmeal_works.png" ml="10%" mr="10%" />
</Box>
<Box bg="#2bb673">
    <Flex  ml="15%" mr="15%" justifyContent="space-between" >
<Box color="white" mt="20px" align="left">
    <Heading as="h6" fontSize="sm">General</Heading>
    <Text fontSize = "sm"><Link>Home</Link></Text>
    <Text fontSize = "sm"><Link>Sign Up</Link></Text>
    <Text fontSize = "sm"><Link>Businesses / Restaurateurs</Link></Text>
    <Text fontSize = "sm"><Link>Advertising</Link></Text>
    <Text fontSize = "sm"><Link>About KindMeal.my</Link></Text>
    <Text fontSize = "sm"><Link>Help & FAQ</Link></Text>
    <Text fontSize = "sm"><Link>Terms & Conditions</Link></Text>
    <Text fontSize = "sm"><Link>Inspiring Partners</Link></Text>
    <Text fontSize = "sm"><Link>Lifestyle Ambassadors</Link></Text>
    <Text fontSize = "sm"><Link>Jobs & Careers</Link></Text>
    <Text fontSize = "sm"><Link>Contact Us</Link></Text>
</Box>
<Box color="white" mt="20px" align="left">
    <Heading as="h6" fontSize="sm">Features</Heading>
    <Text fontSize = "sm"><Link>Meat-Free Deals</Link></Text>
    <Text fontSize = "sm"><Link>Tasty Menus</Link></Text>
    <Text fontSize = "sm"><Link>Kind Moments</Link></Text>
    <Text fontSize = "sm"><Link>Meat-Free Recipes</Link></Text>
    <Text fontSize = "sm"><Link>Member Recommendations</Link></Text>
    <Text fontSize = "sm"><Link>Featured Restaurants</Link></Text>
    <Text fontSize = "sm"><Link>Vegetarian & Vegan Directory</Link></Text>
    <Text fontSize = "sm"><Link>Food Map</Link></Text>
    <Text fontSize = "sm"><Link>Become A Superhero</Link></Text>
    <Text fontSize = "sm"><Link>Vegan News & Vegetarian Articles</Link></Text>
    <Text fontSize = "sm"><Link>Latest Comments</Link></Text>
</Box>
<Box color="white" mt="20px" align="left">
    <Heading as="h6" fontSize="sm">Social Media</Heading>
    <Text fontSize = "sm"><Link>KindMeal Widget</Link></Text>
    <Text fontSize = "sm"><Link>Facebook</Link></Text>
    <Text fontSize = "sm"><Link>Twitter</Link></Text>
    <Text fontSize = "sm"><Link>Instagram</Link></Text>
   
</Box>
<Box color="white" mt="20px" align="left">
    <Heading as="h6" fontSize="sm">Mobile</Heading>
    <Text fontSize = "sm"><Link>iPhone & iPod App</Link></Text>
    <Text fontSize = "sm"><Link>Android App</Link></Text>

    <Heading as="h6" fontSize="sm" mt="15px">Mobile</Heading>
    <Text fontSize = "sm"><Link>Gadhimai: Ending Mass Slaughter</Link></Text>
    <Text fontSize = "sm"><Link>Free Meals</Link></Text>
    <Text fontSize = "sm"><Link>Food Bloggers</Link></Text>
    <Text fontSize = "sm"><Link>Uber CHIRP</Link></Text>
    <Text fontSize = "sm"><Link>Jane Goodall Contest</Link></Text>
    <Text fontSize = "sm"><Link>Win Digi iPhone 6</Link></Text>
    <Text fontSize = "sm"><Link>Feed The Poor</Link></Text>
    <Text fontSize = "sm"><Link>Win Superhero Gifts</Link></Text>
    <Text fontSize = "sm"><Link>Win an iPad Mini 3</Link></Text>
</Box>
<Box color="white" mt="20px" align="left">
    <Heading as="h6" fontSize="sm">PetFinder.my</Heading>
    <Text fontSize = "sm"><Link>Adopt A Pet</Link></Text>
    <Text fontSize = "sm"><Link>Smartphone Apps</Link></Text>
    <Text fontSize = "sm"><Link>WAGazine</Link></Text>
    <Text fontSize = "sm"><Link>Discussion Forum</Link></Text>
    <Text fontSize = "sm"><Link>Medical Fund</Link></Text>
   
</Box>

    </Flex>
    <Center >
        <Box color="white" mt="20px" mb="20px">
<Text fontSize = "xs">Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</Text>
<Text fontSize = "xs">This website promotes compassionate, meat-free dining experience.
     Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Text>
     </Box>
</Center>
</Box>
    </>
  )
}

export default Footer