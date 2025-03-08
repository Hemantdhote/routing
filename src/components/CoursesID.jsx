import React from 'react'
import { useParams } from 'react-router-dom';

const CoursesID = () => {
  const {coursesid}=useParams();

  return (
    <div>

      <h1>this is {coursesid}</h1>
      
    </div>
  )
}

export default CoursesID
