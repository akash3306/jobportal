import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Map } from "../Mapping/Map";
import { FiPhoneCall } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";

function Navbar({token,settoken}) {
  // console.log(token)
  const data = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Find Jobs",
      link: "find",
    },
    {
      name: "Dashboard",
      link: "dashboard",
    },
    {
      name: "About",
      link: "about",
    },
  
    {
      name: "Contact",
      link: "contact",
    },
    {
      name: "Terms",
      link: "Terms",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  const navigate = useNavigate()
  const handlesign =()=>{
    navigate("/Signup")
  }
  const handleLogout = () =>{
    settoken(prev => !prev);
  }
  return (
    <div className="Navwrapper">
      <div className="navbar">
        <div className="Navbar_links">
          <li>
            <Map of={data}
              render={(item) => <Link to={`/${item.link}`}>{item.name}</Link>}
            />
          </li>
        </div>
        <div className="details">
          <p style={{display:"flex",gap:".5vw"}}> <FiPhoneCall  /> +977 9817067110</p>
        </div>
      </div>
      <div className="downpart">
       <div className="search">
        <h1 style={{display:"flex", gap:"1vw"}}><BsBriefcase style={{fontSize:"2.3vw"}} /> Jobpilot</h1>
        <div className="group">
        <FiSearch className="icon"/> <input placeholder="Job title, keyword, company" type="search" className="input" />
        </div>
       </div>
       <div className="signin">
        {token ? <button onClick={handleLogout}>Log out</button> : <button onClick={handlesign}>Sign In</button>}
        <button  style={{backgroundColor:"#5542f6",color:"white"}}>Post A Job</button>
       </div>
      </div>
    </div>
  );
}

export default Navbar;
