import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate,  } from 'react-router-dom'


function Signup() {
 
  const navigate = useNavigate()
  //form validation normal+
   
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const handleSubmit = () =>{
  navigate('/login')
    
  }
  return (
    <div className="signup-container">
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
    <div className="formgroup"> 
       <label htmlFor="username">Username</label>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        placeholder="Username"
      />
      
      </div>
  
    <div className="formgroup">
    <label htmlFor="email">Email:</label>
      <input
        type="email"
        autoComplete="off"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
  
     
    </div>
      <div className="formgroup">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="******"
      />
      
      </div>

      <button type="submit">Sign Up</button>
      <p>
        Have an Account? <Link to="/login">Login</Link>
      </p>
    </form>
  </div>
  )
}

export default Signup


