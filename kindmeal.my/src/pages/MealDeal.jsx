import React, { useEffect, useState } from 'react'
import { Grid,Image,Box } from '@chakra-ui/react'
import MealDealComponent from '../components/MealDealComponent'
import mealdealBanner from '../images/mealdealBanner.png'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

function getData({page}){
    return fetch(`http://localhost:3000/data?_page=${page}&_limit=8`)
    .then(res=>res.json())
}

const MealDeal = () => {
    const [page,setPage] = useState(1)
    const [info,setInfo] = useState([])
    useEffect(()=>{
   handleGetData()
    },[page])

    const handleGetData = () =>{
        getData({page})
        .then(res=>{
            console.log(res)
            setInfo(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <>
    <Box ml="11%" mr="10%" mt="20px" mb="20px" >
    <Image src={mealdealBanner} />
    </Box>
    <Pagination current={page} total={8} onChange={(value)=>setPage(value)}/>
<Grid templateColumns='repeat(2, 1fr)' gap={4}  bg="#eeefae" ml="10%" mr="10%" boxShadow='2xl' p="10px">
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
<Pagination  current={page} total={8} onChange={(value)=>setPage(value)}/> 
<Footer />
    </>
  )
}

export default MealDeal
