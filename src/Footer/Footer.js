import React from 'react'
import './Footer.css'
import { BsBriefcase } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Map } from "../Components/Mapping/Map";
function Footer() {
    const datas = [
        {
            name: "About Us",
            link: "about",
          },
          {
            name: "Contact",
            link: "contact",
          },
          {
            name: "Terms & Condition",
            link: "terms",
          },
          {
            name: "Blog",
            link: "blog",
          }
    ]
    const datass = [
        {
            name: "Browse Jobs",
            link: "find",
          },
          {
            name: "Browse Candidates",
            link: "browsecandidates",
          },
          {
            name: "Candidate Dashboard",
            link: "candidatedashboard",
          },
          {
            name: "Saved Jobs",
            link: "savedjobs",
          }
    ]
    const datasss = [
        {
            name: "Post a Job",
            link: "postajob",
          },
          {
            name: "Browse Employers",
            link: "browseemployers",
          },
          {
            name: "Employer Dashboard",
            link: "employeredashboard",
          },
          {
            name: "Applications",
            link: "applications",
          }
    ]
    const datassss = [
        {
            name: "Faqs",
            link: "faqs",
          },
          {
            name: "Privacy Policy",
            link: "terms",
          },
          {
            name: "Terms & Conditions",
            link: "terms",
          }
         
    ]
  return (
    <div className='footerwrapper'>
      <div className="one">
        <div className="A">
        <h1 style={{display:"flex", gap:"1vw"}}><BsBriefcase style={{fontSize:"2.3vw"}} /> Jobpilot</h1>
      <h3 style={{color:"gray"}}>Call Now: <span style={{color:"white"}}>9817067110</span></h3>
      <h5  style={{color:"gray"}}>6391 Elgin st. Celina, Delaware 10299,New <br />York, United States of America</h5>
        </div>
     <div className="A">
     <h2 >Quick Link</h2>
          <li style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
            <Map of={datas}
              render={(item) => <Link to={`/${item.link}`}>{item.name}</Link>}
            />
          </li>
     </div>
     <div className="A">
     <h2 >Candiate</h2>
     <li style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
            <Map of={datass}
              render={(item) => <Link to={`/${item.link}`}>{item.name}</Link>}
            />
          </li>
     </div>
     <div className="A">
     <h2 > Employers</h2>
     <li style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
            <Map of={datasss}
              render={(item) => <Link to={`/${item.link}`}>{item.name}</Link>}
            />
          </li>
     </div>
     <div className="A">
     <h2 > Support</h2>
     <li style={{display:"flex",flexDirection:"column",gap:"1vw"}}>
            <Map of={datassss}
              render={(item) => <Link to={`/${item.link}`}>{item.name}</Link>}
            />
          </li>
     </div>
      </div>

      <div className="two">
         
             <h5 style={{color:"gray",fontWeight:"500",padding:"1vw"}}>@2024 Jobpilot - Job Portal. All Rights Reserved</h5>
          
      </div>
    </div>
  )
}

export default Footer
