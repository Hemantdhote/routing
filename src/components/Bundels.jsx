import React from 'react'
import { Outlet } from 'react-router-dom'


const Bundels = () => {
  return (
    <div>
      <h1 className='font-bold'>bundels</h1>
      <Outlet/>
       

      
    </div>
  )
}

export default Bundels
