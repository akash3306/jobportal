import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link,  } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Data from '../Data/Data'
import './job.css'
import Layout from '../Layout/Layout';
const JobsView = () => {
  const { title, id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [randomJobs, setRandomJobs] = useState([]);

  useEffect(() => {
    //fetching current job
    const currentJob = Data.find(job => job.id === parseInt(id));
    setJobData(currentJob);

    // Filter out the current job from the data array
    const filteredData = Data.filter(job => job.id !== parseInt(id));

    // Shuffle the filtered data array
    const shuffledData = filteredData.sort(() => Math.random() - 0.5);

    // Select the first three items from the shuffled array
    const randomThreeJobs = shuffledData.slice(0, 4);
    setRandomJobs(randomThreeJobs);
  }, [id]);

  return (
   <Layout>
{jobData && <div className="jov_vieW_WRAPPER">
      <div className="job_description">
        <div className="conpany_logo_section">
          <div className="company_logo">
            <img src={jobData.img} alt="" />
            <div className="company_name_">
              <h2>{jobData.title}</h2>
              <span>
              <p>{jobData.company} <span className='span_tag'>{jobData.type}</span></p>
              </span>
            </div>
          </div>
          <button className="apply_button">
            Apply now 
          </button>
        </div>
        <div className="job_description_view">
          <div className="main_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod fuga, aperiam tempore adipisci possimus odit placeat provident officiis eos in harum recusandae culpa ipsa ex, ad debitis assumenda esse voluptatem? Vitae dolor aliquam est? Sapiente veniam dignissimos expedita dicta eius iste numquam quod eveniet ipsum, nemo modi animi doloribus eligendi. Ipsa, voluptates porro! Asperiores deleniti illo eligendi obcaecati aspernatur! Incidunt libero animi, nihil quos odit amet, itaque cupiditate tenetur corporis voluptatibus necessitatibus corrupti molestiae! Facilis consequatur sit possimus dolore iure earum numquam delectus porro placeat quos sunt, officia doloremque tempore fugit rerum nemo incidunt maiores voluptas. Fuga labore corrupti possimus, eius inventore soluta a exercitationem eveniet quidem quod in, similique, sequi quos nulla minima sed quaerat quis hic enim aliquid? Maiores quam obcaecati illo omnis impedit unde cumque eveniet vel aperiam? Quod amet nemo accusantium suscipit voluptatem consectetur? Molestias rerum aut tempore quaerat accusantium autem cum totam itaque at laborum repudiandae non, perspiciatis qui, quidem voluptatem sapiente iure animi nostrum expedita! Ducimus repellat cum, eaque at explicabo laudantium quisquam magni modi illum a asperiores ea et voluptatum enim repudiandae sint minus illo esse corporis! Corrupti asperiores aspernatur, iure distinctio beatae nobis omnis ducimus. Soluta nisi accusantium ipsam dolores praesentium perferendis?
          </div>
          <div className="over_view_section">
            <div className="overview_box">
              <span>
                Salary: <br />
                {jobData.Salary}
              </span>
              <span>
                Job Location: <br />
                {jobData.location}
              </span>
            </div>
            <div className="job_over_view">

            </div>
          </div>
        </div>
      </div>
      <div className="related_job_views jobsfeatured">
        <h2>Related Jobs :</h2>
      <div className="FJ">           
            {randomJobs &&  randomJobs.map(({id,title,Salary,company,location,type},index) => (
                  <Link to={`/find/${id}/${title}`} className="fj">
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
                        
                    </Link>))}
                    </div>
                  </div>
                
                </div>}
                <Footer />
   </Layout>
  )
}

export default JobsView
