import React from 'react'
import logo from '../../Images/logo.svg'
import { FiSearch } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs"
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CiPen } from "react-icons/ci";
import { IoCodeSlashSharp } from "react-icons/io5";
import { LuMusic4 } from "react-icons/lu";
import { RiBuilding2Line } from "react-icons/ri";
import { AiTwotoneSound } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import arrow from '../../Images/Arrows.png'
import arrows from '../../Images/Arrowss.png'
import images from './pic-1.png';
import backgroundImage from "../../Images/candidate.png";
import backgroundImages from "../../Images/employer.png";
import './Home.css'
import Footer from '../../Footer/Footer';
import data from '../Data/Data'
import Layout from '../Layout/Layout' 
function Homme({token,settoken}) {
   
 console.log(token)

  return (<>
  
   <Layout token={token} settoken={settoken} />
    <div className='HomeWrapper'>
    <div className="one">
    <div className="content">
       <div className="left">
          <div className="paragraph">
            <h1>Find a job that suits<br></br> your interest & skills.</h1>
            <p>Aliquam vitae trupis in diam convallis finibus at risus. Nullam<br></br>in scelerisque leo, eget sollicitudin velit bestibulum.</p>
          </div>
          <div className="groupp">
            <div className="searchs" >
                <FiSearch className='icons' />
                <input placeholder="Job title, keyword..." type="search"  />
            </div>
         <div className="searchs" >
            <MdLocationOn className='icons'/>
                <input placeholder="Your Location" type="search"  />
            </div>
            <button className='but'>Find Jobs</button>
            
        </div>
        <div className="end" style={{color:"#686e7a"}}>
          Suggestion: Designer, Programming, <span style={{color:"#5542f6"}}>Digital Marketting</span>, Video, Animation.
        </div>
       </div>
       <div className="right">
         <img  src = {logo} alt=''/>
       </div>
       
    </div>
    <div className="bottom">
      <div className="box">
         <BsBriefcase className='ico' />  <p>1,75,324  <span>Live Jobs</span></p>
      </div>
      <div className="box">
      <HiBuildingOffice2 className='ico'/>  <p>97,354 <span>Companies</span></p>
      </div>
      <div className="box">
      <MdPeopleAlt  className='ico' />  <p>938,47,154<span >Candidates</span></p>
      </div>
      <div className="box">
      <BsBriefcase className='ico'  />  <p>7,532 <span >New Jobs</span></p>
      </div>
      
    </div>
    </div>
     <div className="two">
        <div className="heading">
          <h1 style={{padding:"3.5vw 0vw 0vw 0vw ", fontWeight:"500"}}>Most Popular Vacancies</h1>
        </div>
        <div className="vacancies">
            <div className="objects">
                <div className="subobj">
                  <h3>Anesthesiologists</h3>
               <p>45,904 Open Positions</p>
               </div>
               <div className="subobj">
                  <h3>Maxiilofacial Surgeons</h3>
               <p>78,875 Open Positions</p></div>
               <div className="subobj">
                  <h3>Financial Manager</h3>
               <p>61,391 Open Positions</p></div>
            </div>
            <div className="objects">
                <div className="subobj">
                  <h3>Surgeons</h3>
               <p>45,904 Open Positions</p>
               </div>
               <div className="subobj">
                  <h3>Software Developer</h3>
               <p>78,875 Open Positions</p></div>
               <div className="subobj">
                  <h3>Management Analysis</h3>
               <p>61,391 Open Positions</p></div>
            </div>
            <div className="objects">
                <div className="subobj">
                  <h3>Obstetricians-Gynecologists</h3>
               <p>42,904 Open Positions</p>
               </div>
               <div className="subobj">
                  <h3>Psychiatrists</h3>
               <p>85,475 Open Positions</p></div>
               <div className="subobj">
                  <h3>IT Manager</h3>
               <p>35,391 Open Positions</p></div>
            </div>
            <div className="objects">
                <div className="subobj">
                  <h3>Dentist</h3>
               <p>12,904 Open Positions</p>
               </div>
               <div className="subobj">
                  <h3>Orthodontists</h3>
               <p>33,875 Open Positions</p></div>
               <div className="subobj">
                  <h3>Data Scientist</h3>
               <p>21,391 Open Positions</p></div>
            </div>
        </div>
     </div>
     <div className="three">
      <div className="header">
      <h1 style={{padding:"3.5vw 10vw 0vw 0vw ", fontWeight:"500"}}>How jobpilot work</h1>
      </div>
      <div className="CUFA">
        <img src={arrow} alt='' />
        <img style={{marginLeft:"56vw"}} src={arrow} alt='' />
        <img style={{marginLeft:"35vw",marginTop:"4vw"}} src={arrows} alt='' />
         <div className="cufa">
         <MdOutlinePersonAddAlt className='out' />
            <h3 style={{padding:"3vw 0vw 0vw 0vw"}}>Create Account</h3>
            <p style={{textAlign:"center",paddingTop:"1vw"}}>ALiquam facilitis efstand spien, nec <br></br >Trpor lew ttreist at.</p>
         </div>
        
         <div className="cufa" style={{backgroundColor:"white",borderRadius:"10px"}}>
         <FaCloudUploadAlt  style={{fontSize:"4vw",backgroundColor:"whitesmoke",borderRadius:"50%",color:"#5542f6",padding:"1vw"}} />
            <h3 style={{padding:"3vw 0vw 0vw 0vw"}}>Upload CV/Resume</h3>
            <p style={{textAlign:"center",paddingTop:"1vw"}}>ALiquam facilitis efstand spien, nec <br></br >Trpor lew ttreist at.</p>
         </div>
         <div className="cufa">
         <FaSearchPlus  className='out' />
            <h3 style={{padding:"3vw 0vw 0vw 0vw"}}>Find Suitable Job</h3>
            <p style={{textAlign:"center",paddingTop:"1vw"}}>ALiquam facilitis efstand spien, nec <br></br >Trpor lew ttreist at.</p>
         </div>
         <div className="cufa">
         <BsPatchCheckFill className='out' />
            <h3 style={{padding:"3vw 0vw 0vw 0vw"}}>Apply Job</h3>
            <p style={{textAlign:"center",paddingTop:"1vw"}}>ALiquam facilitis efstand spien, nec <br></br >Trpor lew ttreist at.</p>
         </div>
      </div>
     </div>
     <div className="four">
     <div className="heading">
          <h1 >Popular Category</h1>
          <button className='View'>View All </button>
        </div>
        <div className="GM">
           <div className="gm">
               <div className="gmm">
               <CiPen className='icco'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> Graphics & Design</h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>357 Open Position</p>
                </div>
                
               </div>
               <div className="gmm">
                 <LuMusic4 className='icco'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> Music & Audio</h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>204 Open Position</p>
                </div>
                
               </div>
             </div>
             <div className="gm">
               <div className="gmm">
               <IoCodeSlashSharp className='icco'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> Programming </h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>312 Open Position</p>
                </div>
                
               </div>
               <div className="gmm">
               <RiBuilding2Line className='icco' />
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}>Account & Finance</h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>167 Open Position</p>
                </div>
                
               </div>
             </div>
             <div className="gm">
               <div className="gmm">
               <AiTwotoneSound className='icco'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> Digital Marketting</h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>257 Open Position</p>
                </div>
                
               </div>
               <div className="gmm">
               <FaBriefcaseMedical className='icco'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> Health & Care</h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>125 Open Position</p>
                </div>
                
               </div>
             </div>
             <div className="gm">
               <div className="gmm" >
               <MdOndemandVideo className='icco' />
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> Video & Animation</h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>247 Open Position</p>
                </div>
                
               </div>
               <div className="gmm" style={{border:".5px solid gray",borderRadius:"10px",background:"white"}}>
               <FaDatabase className='icco'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> Data & Science</h4>
                    <p style={{fontSize:"1vw",color:"gray"}}>57 Open Position</p>
                </div>
                
               </div>
             </div>
        </div>
       
     </div>
     <div className="five">
         <div className="heading">
          <h1 >Featured Job</h1>
          <button className='View'>View All</button>
        </div>
       
        <div className="FJ">
          {data.map(({location,title,Salary,company,type})=>
           <div className="fj">
           <div className="fjj">
             <h3>{title} </h3>
             <div style={{display:"flex"}}>
             <h5 style={{color:"green",border:".5px solid gray",padding:".5vw",backgroundColor:"white",borderRadius:"5px"}}>{type}</h5>
             <h5 style={{padding:".5vw",color:"gray"}}>{Salary} </h5>
             </div>
            <div style={{display:"flex",marginTop:"1vw"}}>
               
            <FcGoogle className='google' />
            <div className='company'>
               <h4>{company}</h4>
                <h5 style={{color:"gray"}}><MdLocationOn style={{fontSize:"1.3vw"} }/> {location}</h5>
            </div>
            </div>
           </div>
              
         </div>
          )}
         
        
          
        </div>
         
       
     </div>
     <div className="fours">
     <div className="heading">
          <h1 >Top Companies</h1>
          <button className='View'>View All</button>
        </div>
        <div className="GM">
           <div className="gm">
               <div className="gmm">
               <FcGoogle  className='googles'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> ABCD XYZ Company</h4>
                 <h5 style={{color:"gray"}}><MdLocationOn style={{fontSize:"1.3vw"} }/> Jhapa,Nepal</h5>
                  <button className='butt' style={{width:"100%",padding:".7vw",color:"blue",fontWeight:"700",backgroundColor:"whitesmoke",border:"none"}}>Open Position (3)</button>
                </div>
                
                
               </div>
               <div className="gmm">
                 <FcGoogle className='googles'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}> ABCD XYZ Company</h4>
                 <h5 style={{color:"gray"}}><MdLocationOn style={{fontSize:"1.3vw"} }/> Jhapa,Nepal</h5>
                 <button  className='butt' style={{width:"100%",padding:".7vw",color:"blue",fontWeight:"700",backgroundColor:"whitesmoke",border:"none"}}>Open Position (3)</button>
                </div>
                
               </div>
             </div>
             <div className="gm">
               <div className="gmm">
               <FcGoogle className='googles'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}>ABCD XYZ Company </h4>
                 <h5 style={{color:"gray"}}><MdLocationOn style={{fontSize:"1.3vw"} }/> Jhapa,Nepal</h5>
                 <button  className='butt' style={{width:"100%",padding:".7vw",color:"blue",fontWeight:"700",backgroundColor:"whitesmoke",border:"none"}}>Open Position (3)</button>
                </div>
                
               </div>
               <div className="gmm">
               <FcGoogle className='googles' />
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}>ABCD XYZ Company</h4>
                 <h5 style={{color:"gray"}}><MdLocationOn style={{fontSize:"1.3vw"} }/> Jhapa,Nepal</h5>
                 <button  className='butt' style={{width:"100%",padding:".7vw",color:"blue",fontWeight:"700",backgroundColor:"whitesmoke",border:"none"}}>Open Position (3)</button>
                </div>
                
               </div>
             </div>
             <div className="gm">
               <div className="gmm">
               <FcGoogle className='googles'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}>ABCD XYZ Company</h4>
                 <h5 style={{color:"gray"}}><MdLocationOn style={{fontSize:"1.3vw"} }/> Jhapa,Nepal</h5>
                 <button  className='butt' style={{width:"100%",padding:".7vw",color:"blue",fontWeight:"700",backgroundColor:"whitesmoke",border:"none"}}>Open Position (3)</button>
                </div>
                
               </div>
               <div className="gmm">
               <FcGoogle className='googles'/>
                <div style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
                 <h4 style={{fontWeight:"500"}}>ABCD XYZ Company</h4>
                 <h5 style={{color:"gray"}}><MdLocationOn style={{fontSize:"1.3vw"} }/> Jhapa,Nepal</h5>
                 <button  className='butt' style={{width:"100%",padding:".7vw",color:"blue",fontWeight:"700",backgroundColor:"whitesmoke",border:"none"}}>Open Position (3)</button>
                </div>
                
               </div>
             </div>
            
        </div>
       
     </div>
     <div className="threes">
      <div className="header">
      <h1 style={{padding:"3.5vw 10vw 0vw 0vw ", fontWeight:"500"}}>Clients Testimonial </h1>
      </div>
      <div className="CUFA">
      <div className="cufa" >
         <div className="stars">
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          </div>
          <p style={{padding:"1.5vw"}}>""Mauris eget lorem odio. Mauris convallis justo<br></br> molestie metus aliquam lacinia. Suspendisse ut <br></br>dui vulputate augue condimentum ornare. Morbi vitae tristique ante"</p>
          <div  style={{display:"flex",paddingLeft:"1.5vw",gap:"1vw"}}>
         <img src={images}className='review' alt=""  />
         <div style={{display:"flex",flexDirection:"column",gap:".2vw"}}>
         <h4 style={{paddingTop:".5vw"}}>John Doe</h4>
         <p style={{fontSize:".9vw",color:"gray"}}>Creative Director</p>
         </div>
        
         </div>        
         </div>
         <div className="cufa" >
         <div className="stars">
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          </div>
          <p style={{padding:"1.5vw"}}>""Mauris eget lorem odio. Mauris convallis justo<br></br> molestie metus aliquam lacinia. Suspendisse ut <br></br>dui vulputate augue condimentum ornare. Morbi vitae tristique ante"</p>
          <div  style={{display:"flex",paddingLeft:"1.5vw",gap:"1vw"}}>
         <img src={images}className='review' alt=""  />
         <div style={{display:"flex",flexDirection:"column",gap:".2vw"}}>
         <h4 style={{paddingTop:".5vw"}}>John Doe</h4>
         <p style={{fontSize:".9vw",color:"gray"}}>Creative Director</p>
         </div>
        
         </div>        
         </div>
         <div className="cufa" >
         <div className="stars">
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          <BsFillStarFill  style={{fontSize:"2vw",color:"orange"}} />
          </div>
          <p style={{padding:"1.5vw"}}>""Mauris eget lorem odio. Mauris convallis justo<br></br> molestie metus aliquam lacinia. Suspendisse ut <br></br>dui vulputate augue condimentum ornare. Morbi vitae tristique ante"</p>
          <div  style={{display:"flex",paddingLeft:"1.5vw",gap:"1vw"}}>
         <img src={images}className='review' alt=""  />
         <div style={{display:"flex",flexDirection:"column",gap:".2vw"}}>
         <h4 style={{paddingTop:".5vw"}}>John Doe</h4>
         <p style={{fontSize:".9vw",color:"gray"}}>Creative Director</p>
         </div>
        
         </div>        
         </div>
        
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

    </>

  )
}

export default Homme

