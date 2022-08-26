import React from 'react'
import { Grid, GridItem,Image } from '@chakra-ui/react'

const MealDealComponent = ({id,image,title,discount,description,subtitle,location,rating,icon1,icon2,expires}) => {
  return (
    <>
<GridItem>
  <Image src={image}/>
</GridItem>
    </>
  )
}

export default MealDealComponent