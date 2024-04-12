import React from 'react'
import {Link} from "react-router-dom"
import './Sidebar.css'
const Sidebar = () => {

    const datas = [

    {
      name:"General",
      link:"general"
    },
    {
      name:"Info",
      link:"info"
    },
    {
      name:"Change Password",
      link:"change"
    },
    {
      name:"Social Links",
      link:"social"
    },
    {
      name:"Connections",
      link:"connection"
    },
    {
      name:"Notifications",
      link:"notification"
    }
    
       ]
  return (
    <div className='Sidebarwrapper'>
    <div className='links'>
    
        {/* This is old mapping technique */}
         {datas.map((el,index)=>(
             <Link key = {index} to ={`/dashboard/${el.link}`}>{el.name}</Link>
          
          ))}
   </div>
        
    </div>
  )
}

export default Sidebar