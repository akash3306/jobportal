import React from 'react'
import Layout from '../Layout/Layout'
import './Blog.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer';
import one from '../../Images/one.jpeg'
import kaley from '../../Images/kaley.jpeg'
import kaleyy from '../../Images/kaleyy.webp'
import gore from '../../Images/gore.jpeg'
import two from '../../Images/two.webp'
import three from '../../Images/three.jpg'
import kt from '../../Images/kt.jpeg'
function Blog() {
  return (
   <Layout>
     <div className="Blog">
        <div className="blog">
        <h5>Blog</h5>
        <p><span><Link to='/'>Home</Link> /</span> Blog</p>
        </div>
        <div className="blogs">
            <div className="items">
                  <div className="image">
                       <img src={kaleyy} alt='' />
                  </div>
                  <div className="sayings">
                       <h3>Proin sit amet massa eget odio consecteur <br />ultricies.</h3>
                       <p>INteger imperdiet mauris eget nisi ultrices, quis hendrerit <br />est consequat. Vivamus et volutpat odio. Maecenas porta <br /> erat sed massa bibendum pellintesque.Integer imprediwt<br />  mauris nisi ultricies, vivamus et voluvat imprediw odio. <br />erat sed massa bibendum pellintesque.Integer imprediw </p>
                        <button>Read More</button>
                  </div>

            </div>
            <div className="items">
                  <div className="image">
                       <img src={kaley} alt='' />
                  </div>
                  <div className="sayings">
                       <h3>Proin sit amet massa eget odio consecteur <br />ultricies.</h3>
                       <p>INteger imperdiet mauris eget nisi ultrices, quis hendrerit <br />est consequat. Vivamus et volutpat odio. Maecenas porta <br /> erat sed massa bibendum pellintesque.Integer imprediwt<br />  mauris nisi ultricies, vivamus et voluvat imprediw odio. <br />erat sed massa bibendum pellintesque.Integer imprediw </p>
                        <button>Read More</button>
                  </div>

            </div>
            <div className="items">
                  <div className="image">
                       <img src={one} alt='' />
                  </div>
                  <div className="sayings">
                       <h3>Proin sit amet massa eget odio consecteur <br />ultricies.</h3>
                       <p>INteger imperdiet mauris eget nisi ultrices, quis hendrerit <br />est consequat. Vivamus et volutpat odio. Maecenas porta <br /> erat sed massa bibendum pellintesque.Integer imprediwt<br />  mauris nisi ultricies, vivamus et voluvat imprediw odio. <br />erat sed massa bibendum pellintesque.Integer imprediw </p>
                        <button>Read More</button>
                  </div>

            </div>
            <div className="items">
                  <div className="image">
                       <img src={gore} alt='' />
                  </div>
                  <div className="sayings">
                       <h3>Proin sit amet massa eget odio consecteur <br />ultricies.</h3>
                       <p>INteger imperdiet mauris eget nisi ultrices, quis hendrerit <br />est consequat. Vivamus et volutpat odio. Maecenas porta <br /> erat sed massa bibendum pellintesque.Integer imprediwt<br />  mauris nisi ultricies, vivamus et voluvat imprediw odio. <br />erat sed massa bibendum pellintesque.Integer imprediw </p>
                        <button>Read More</button>
                  </div>

            </div>
            <div className="items">
                  <div className="image">
                       <img src={two} alt='' />
                  </div>
                  <div className="sayings">
                       <h3>Proin sit amet massa eget odio consecteur <br />ultricies.</h3>
                       <p>INteger imperdiet mauris eget nisi ultrices, quis hendrerit <br />est consequat. Vivamus et volutpat odio. Maecenas porta <br /> erat sed massa bibendum pellintesque.Integer imprediwt<br />  mauris nisi ultricies, vivamus et voluvat imprediw odio. <br />erat sed massa bibendum pellintesque.Integer imprediw </p>
                        <button>Read More</button>
                  </div>

            </div>
            <div className="items">
                  <div className="image">
                       <img src={three} alt='' />
                  </div>
                  <div className="sayings">
                       <h3>Proin sit amet massa eget odio consecteur <br />ultricies.</h3>
                       <p>INteger imperdiet mauris eget nisi ultrices, quis hendrerit <br />est consequat. Vivamus et volutpat odio. Maecenas porta <br /> erat sed massa bibendum pellintesque.Integer imprediwt<br />  mauris nisi ultricies, vivamus et voluvat imprediw odio. <br />erat sed massa bibendum pellintesque.Integer imprediw </p>
                        <button>Read More</button>
                  </div>

            </div>
            <div className="items">
                  <div className="image">
                       <img src={kt} alt='' />
                  </div>
                  <div className="sayings">
                       <h3>Proin sit amet massa eget odio consecteur <br />ultricies.</h3>
                       <p>INteger imperdiet mauris eget nisi ultrices, quis hendrerit <br />est consequat. Vivamus et volutpat odio. Maecenas porta <br /> erat sed massa bibendum pellintesque.Integer imprediwt<br />  mauris nisi ultricies, vivamus et voluvat imprediw odio. <br />erat sed massa bibendum pellintesque.Integer imprediw </p>
                        <button>Read More</button>
                  </div>

            </div>
        </div>
        <Footer />
     </div>
   </Layout>
  )
}

export default Blog
