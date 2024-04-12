import React from 'react'
import './Error.css'
import Errors from '../Images/error.jpeg'
import { useNavigate } from 'react-router-dom'
const Error = () => {
  const histoy = useNavigate()
  const handleclick =()=>{
        histoy(-1)
  }
  return (
    <div className='page'>
       <button onClick={handleclick}>Go Back</button>
     <img src={Errors} alt=''/>
    
    </div>
  )
}

export default Error