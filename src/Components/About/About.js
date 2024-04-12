import React from 'react'
import './About.css'
import Layout from '../Layout/Layout'
import { BsBriefcase } from "react-icons/bs"
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";
import amazon from '../../Images/amazon.png'
import google from '../../Images/google.png'
import microsoft from '../../Images/microsoft.png'
import bootstrap from '../../Images/bootstrap.png'
import site from '../../Images/site.png'
import one from '../../Images/one.jpg'
import two from '../../Images/two.webp'
import three from '../../Images/three.jpg'
import four from '../../Images/four.jpeg'
import team from '../../Images/team-building.svg'
import backgroundImage from "../../Images/candidate.png";
import backgroundImages from "../../Images/employer.png";
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
function About() {
  return (
    <Layout>
      <div className="About">
        <div className="about">
        <h5>About Us</h5>
        <p><span><Link to='/'>Home</Link> /</span> About Us</p>
        </div>
        <div className="abouts">
        <div className="paragraphs">
            <span>Who we are</span>
            <h1>We're highly skilled and<br></br>professionals team.</h1>
            <p>Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam <br /> metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum <br /> maximus nec justo sed maximus.</p>
        </div>
        <div className="bottom">
      <div className="boxx">
      <BsBriefcase className='ico' />  <p>1,75,324 <span >Live Jobs</span></p>
      </div>
      <div className="boxx">
      <HiBuildingOffice2 className='ico' />  <p>97,354<span >Companies</span></p>
      </div>
      <div className="boxx">
      <MdPeopleAlt   className='ico' />  <p>938,47,154 <span >Candidates</span></p>
      </div>
      <div className="boxx">
      <BsBriefcase className='ico' />  <p>7,532 <span >New Jobs</span></p>
      </div>
      
    </div>
        </div>
       <div className="images">
        <div className="imgg">
        <img src={amazon} alt='' />
        <img src={google} alt='' />
        <img src={microsoft} alt='' />
        <img src={bootstrap} alt='' />
        <img src={site} alt='' />
        <img src={bootstrap} alt='' />
        </div>
       
       </div>
      
      <div className="imagess">
        <div className="pic">
        <img src={one} alt='' />
        </div>
        <div className="pic">
          <div className="picc">
          <img src={two} alt='' />
          </div>
          <div className="picc">
          <img src={three} alt='' />
            </div>
          </div>
          <div className="pic">
          <img src={four} alt='' />
          </div>
      </div>
      <div className="last">
        <div className="paragraphs">
            <span>Our Mission</span>
            <h1>Our mission is help people<br></br>to find the perfect job.</h1>
            <p>Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam <br /> metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum <br /> maximus nec justo sed maximus.</p>
        </div>
         <div className='para'>
          <img src={team} alt='' />
         </div>
        </div>
        <div className="threess">
    
    <div  className="CUFA">
    <div style={{border:"none"}}className="cufa" >
       
          <div className='cuffa'>
          <h1 style={{fontWeight:"500"}}>Become a Candidate</h1>
         <p style={{color:"gray"}}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Cras cursus a dolor convallis <br />effictur.</p>    
        <button className='boton' >Register Now  </button>
          </div>
          <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",backgroundPosition: "center center",height:"100%"}} className='cuffaa'>
          </div>
       </div>
       <div style={{border:"none",backgroundColor:"#5542f6"}}className="cufa" >
       
       <div className='cuffa'>
       <h1 style={{fontWeight:"500",color:"white"}}>Become a Employer</h1>
      <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Cras cursus a dolor convallis <br />effictur.</p>    
     <button className='boton' >Register Now  </button>
       </div>
       <div style={{backgroundImage: `url(${backgroundImages})`, backgroundSize: "cover",backgroundPosition: "center center",height:"100%"}} className='cuffaa'>
       </div>
    </div>

    </div>
   </div>
   <Footer />
     </div>
    </Layout>
  )
}

export default About
