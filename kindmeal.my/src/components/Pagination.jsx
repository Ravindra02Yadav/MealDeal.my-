import React from 'react'
import { Box,Button, Flex } from '@chakra-ui/react'

const Pagination = ({current,onChange,total}) => {
    const prev = <Button disabled={current === 1} onClick={()=>onChange(current-1)}>Prev</Button>
    const pages = new Array(total).fill(0).map((a,i)=>
    <Button disabled={current === (i+1)} onClick={()=>onChange(i+1)}> {i+1} </Button>
    )
    const next = <Button disabled = {current === total} onClick={()=>onChange(current+1)}>Next</Button>
  return (
    <>
    <Flex justifyContent="space-around" m="10px">
    <Box>
    {prev}
    </Box>
    <Box color="blue">
    {pages}
    </Box>
    <Box>
    {next}
    </Box>
    
    </Flex>



    </>
  )
}

export default Pagination