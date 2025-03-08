import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <h1 className='font-bold'>courses</h1>
      <Outlet/>
    
      
    </div>
  )
}

export default Courses
