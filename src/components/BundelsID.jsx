import React from 'react'
import { useParams } from 'react-router-dom'

const BundelsID = () => {
  const {bundelsid}=useParams();
  return (
    <div>
      <h1>this is bundles {bundelsid}</h1>
      
    </div>
  )
}

export default BundelsID
