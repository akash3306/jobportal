import React, {  useState } from 'react'
import Layout from '../Layout/Layout'
import './FindJobs.css'
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { PiSlidersBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link,  } from 'react-router-dom';
import data from '../Data/Data'
import Footer from '../../Footer/Footer';

function FindJobs() {

  
  const [query, setQuery] = useState("")
  const [inputValue, setinputValue] = useState("")

  const handleInputchange = event =>{
    setQuery(event.target.value)
  }
 
  const handlebuttonchange = event =>{
    setinputValue(query)
  }
  const filtreditems = data.filter(data => data.title.toLocaleLowerCase().indexOf(inputValue.toLocaleLowerCase() )!== -1);

  function filterData(data,query){
    let filtreddata = data;

    if(query){
      filtreddata = filtreditems;
    }

    return filtreddata.map(({id,title,Salary,company,location,type},index)=>(
      <Link to={`${id}/${title}`} className="fj">
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
         
    </Link>
    )

    )
  }

  const result = filterData(data, query);
  return (
    <Layout>
     <div className="findjob">
      <div className="find">
        <h5>Find Job</h5>
        <p><span><Link to='/'>Home</Link> /</span> Find Job</p>
      </div>
      <div className="groupp">
            <div className="searchs" >
                <FiSearch className='icons' />
                <input placeholder="Search by: Job title,Position, keyword...." type="text" onChange={handleInputchange} value={query}  />
            </div>
            <div className="searchs" >
            <MdLocationOn className='icons'/>
                <input placeholder="Location: City,state or Zip code" type="text" />
            </div>
            <div className="buttons">
            <button className='but'><PiSlidersBold />Filters</button>
            <button onClick={ handlebuttonchange} >Find Jobs</button>
            </div>
           
        </div>
        <div className="jobsfeatured">
         
        <div className="FJ">  
         {result}
        </div>
         
       
     </div>
     <Footer />
     </div>
    
    </Layout>
  )
}

export default FindJobs
