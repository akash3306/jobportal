import React from 'react'
import './Contact.css'
import Layout from '../Layout/Layout'
import { useForm } from 'react-hook-form'
import { BsFillSendFill } from "react-icons/bs";
import Footer from '../../Footer/Footer';
import { BsBriefcase } from "react-icons/bs"
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
function Contact() {
    const{
        register,handleSubmit,formState:{errors}} = useForm();
        const handlemessage =()=>{
         alert(`Sucessfully Submitted`)
          }
    
  return (
   <Layout>
     <div className="Contact">
        <div className="cc">
        <div className="contact">
        <h5>Contact Us</h5>
        <p><span><Link to='/'>Home</Link> /</span> Contact Us</p>
        </div>
        <div className="contacts">
        <div className="paragraphs">
            <span>Who we are</span>
            <h1>We're care about<br></br>customer services.</h1>
            <p>Want ti chat? We'd love to hear from you! Get in  touch with our Cusstomer<br /> Sucess Team ro inquire about speaking events,advertising rates, or just <br />say hello.</p>
          </div>
          <div className="forms">
          
          <form onSubmit={handleSubmit(handlemessage)}>
          <h3>Get in Touch</h3>
          <div className="inputs">
          <input type='text'{...register("Username",
            {required:true})} placeholder='User Name' />
            {errors.Username && <p>Error</p>}
            <input type='email'{...register("email",
            {required:true})} placeholder='Email' />
            {errors.email && <p>Error</p>}
          </div>
          <div className="message">
          <input  type='text'{...register("sub",
            {required:true})} placeholder='Subject' />
            {errors.sub && <p>Error</p>}
            <input className='msg' type='text'{...register("mes",
            {required:true})} placeholder='Message' />
            {errors.mes && <p>Error</p>}
          </div>
          <button type='submit'>Send Message <BsFillSendFill /></button>
          </form>
          </div>
        
        </div>
        <div className="map">
        <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            title="Unique"
          ></iframe>
        </div>
        </div>
       <div className="ccc">
        <div className="lefty">
        <input  type='text' placeholder='Email address' />
        <button>Subscribe</button>
        </div>
        <div className="bottoms">
      <div className="boxx">
      <BsBriefcase style={{fontSize:"3vw",padding:"5px",color:"#5542f6",borderRadius:"7px"}} /> <p>1,75,324<br></br> <span style={{fontSize:"1vw", color:"gray", fontWeight:"lighter"}}>Live Jobs</span></p>
      </div>
      <div className="boxx">
      <HiBuildingOffice2 style={{fontSize:"3vw",padding:"5px",color:"#5542f6",borderRadius:"7px"}} />  <p>97,354<br></br> <span style={{fontSize:"1vw", color:"gray", fontWeight:"lighter"}}>Companies</span></p>
      </div>
      <div className="boxx">
      <MdPeopleAlt   style={{fontSize:"3vw",padding:"5px",color:"#5542f6",borderRadius:"7px"}} />  <p>938,47,154<br></br> <span style={{fontSize:"1vw", color:"gray", fontWeight:"lighter"}}>Candidates</span></p>
      </div>
      <div className="boxx">
      <BsBriefcase style={{fontSize:"3vw",padding:"5px",color:"#5542f6",borderRadius:"7px"}} /> <p>7,532<br></br> <span style={{fontSize:"1vw", color:"gray", fontWeight:"lighter"}}>New Jobs</span></p>
      </div>
      
    </div>
       </div>
        <Footer />
     </div>
   </Layout>
  )
}

export default Contact
