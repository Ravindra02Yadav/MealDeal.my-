import React, { useEffect, useState } from 'react'
import { Grid } from '@chakra-ui/react'
import MealDealComponent from '../components/MealDealComponent'

function getData(){
    return fetch("http://localhost:3000/data")
    .then(res=>res.json())
}

const MealDeal = () => {
    const [info,setInfo] = useState([])
    useEffect(()=>{
    getData()
    .then(res=>{
        console.log(res)
        setInfo(res)
    })
    .catch(err=>{
        console.log(err)
    })
    },[])
  return (
    <>
<Grid templateColumns='repeat(2, 1fr)' gap={4}  bg="#eeefae" ml="10%" mr="10%" boxShadow='2xl'>
    {
        info.map((item)=>(
           <MealDealComponent key={item.id}
           id={item.id}
           image={item.image}
           title={item.title}
           discount={item.discount}
           description={item.description}
           subtitle={item.subtitle}
           location={item.location}
           rating={item.rating}
           icon1={item.icon1}
           icon2={item.icon2}
           expires={item.expires}
           />
        ))
    }
</Grid>
    </>
  )
}

export default MealDeal
