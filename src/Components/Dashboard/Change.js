import React from 'react'
import './Sidebar.css'
import { useForm } from 'react-hook-form'
const Change = () => {
  const{
    register,handleSubmit,formState:{errors}} = useForm();
    const handlemessage =()=>{
     alert(`Sucessfully Submitted`)
      }
  return (
   <div className='change'>
       <form onSubmit={handleSubmit(handlemessage)}>
          <div className="inputs">
          <label >Current Password</label>
          <input type='text'{...register("Username",
            {required:true})} />
            {errors.Username && <p>Error</p>}

            <label >New Password</label>
            <input type='text'{...register("email",
            {required:true})}/>
            {errors.email && <p>Error</p>}

            <label >Repeat New Password</label>
            <input  type='text'{...register("sub",
            {required:true})}/>
            {errors.sub && <p>Error</p>}

          </div>
         
          <button type='submit'>Save Changes</button>
          </form>
   </div>
  )
}

export default Change
