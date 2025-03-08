import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <div className='p-5'>
      <h1 className='font-bold capitalize'>this is Login page</h1>
      <div className='flex gap-5  mt-3' >
      <Link className=' px-3 py-2 bg-blue-500 rounded-md text-white' to="/login/courses">courses</Link>
      <Link className=' px-3 py-2 bg-blue-500 rounded-md text-white' to="/login/bundels">bundels</Link>
     <Outlet/>
      </div>
      
    </div>
  )
}

export default Login
