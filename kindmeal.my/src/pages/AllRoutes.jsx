import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MealDeal from './MealDeal'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MealDeal" element={<MealDeal />} />
        </Routes>
    </div>
  )
}

export default AllRoutes