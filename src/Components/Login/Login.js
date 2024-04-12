import React, { useState } from 'react'
import '../SIgnUp/Signup.css';
import { Link, } from 'react-router-dom'

function Login({token,settoken}) {

const [values, setValues] = useState({
  email: "",
  password: "",
});
const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
const handleSubmit = () =>{
    settoken(prev => !prev);
}

  return (
    <div className='signup-container'>
     <form className='signup-form' onSubmit={handleSubmit}>
             <h2>Login</h2>

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
    
        <button type='submit'  >Login</button>
       <Link to='/forgotPassword'>Forgot Password?</Link>
        <p>Don't have an Account?  <Link to= '/signup'>Sign up</Link></p>
 </form> 
    </div>
  )
}

export default Login


