import React from 'react'
import { useParams } from 'react-router-dom';

const CoursesID = () => {
  const {courseid}=useParams();

  return (
    <div>

      <h1>this is {courseid}</h1>
      
    </div>
  )
}

export default CoursesID
