import React from 'react'
import './Sidebar.css'
import profile from '../../Images/profile.png'
import { useForm } from 'react-hook-form'
const Profile = () => {
  const{
    register,handleSubmit,formState:{errors}} = useForm();
    const handlemessage =()=>{
     alert(`Sucessfully Submitted`)
      }
  return (
    <>
      <div className="profile">
        <div className="upper">
        <div className="image">
        <img src={profile} alt='' />
        </div>
        <div className="button">
          <button>Upload a new photo</button>
          <button>Reset</button>
        </div>
        </div>
        <form onSubmit={handleSubmit(handlemessage)}>
          <div className="inputs">
           
          <input type='text'{...register("Username",
            {required:true})} placeholder='User Name' />
            {errors.Username && <p>Error</p>}

            <input type='email'{...register("email",
            {required:true})} placeholder='Email' />
            {errors.email && <p>Error</p>}

            <input  type='text'{...register("sub",
            {required:true})} placeholder='Company' />
            {errors.sub && <p>Error</p>}

          </div>
          <button type='submit'>Save Changes</button>
          </form>
      </div>
    </>
  )
}

export default Profile
