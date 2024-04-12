import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import './Dashboard.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
function Dashboard() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/dashboard/general')
  },[])
  return (
   <Layout>
    <div className="dashboard">
    <div className="dash">
        <h5>Dashboard</h5>
        <p><span><Link to='/'>Home</Link> /</span> Dashboard</p>
    </div>
    <div className="dashs">
      <Sidebar />
      <Outlet/>
  
    </div>
    </div>
   </Layout>
   

  ) 
}

export default Dashboard

