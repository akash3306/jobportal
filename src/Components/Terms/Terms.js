import React from 'react'
import './Terms.css'
import Layout from '../Layout/Layout'
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
function Terms() {
  return (
   <Layout>
    <div className="Terms">
    <div className="terms">
        <h5>Terms & Conditions</h5>
        <p><span><Link to='/'>Home</Link> /</span> Terms & Conditions</p>
        </div>
        <div className="conditions">
             <div className="One">
                <h1>01. Terms & Conditions</h1>
                <p>
                Praesent placerat dictum elementum. Nam pulvinar urna vel lectus maximus, eget faucibus turpis hendrerit. Sed <br /> iaculis molestie arcu, et accumsan nisi. Quisque molestie velit vitae ligula luctus bibendum. Duis sit amet eros<br />  mollis, viverra ipsum sed, convallis sapien. Donec justo erat, pulvinar vitae dui ut, finibus euismod enim. Donec velit<br />  tortor, mollis eu tortor euismod, gravida lacinia arcu.
                </p>
                <ul>
                <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
                 <li>Curabitur luctus sapien augue, mattis faucibus nisi vehicula nec.</li>
                 <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor.</li>
                 <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                 <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                </ul>
                
             </div>
             <div className="One">
                <h1>02. Limitations</h1>
                <p>
                In pretium est sit amet diam feugiat eleifend. Curabitur consectetur fringilla metus. Morbi hendrerit facilisis <br /> tincidunt. Sed condimentum lacinia arcu. Ut ut iaculis metus. Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Fusce vel erat elit. In vitae turpis tempor, accumsan sapien vitae, rutrum eros. Integer pulvinar mattis turpis, ac<br />  fermentum leo ullamcorper a. Nam finibus eros libero, sit amet mattis lacus tristique eu. Done nec ex convallis,<br />  ultricies eros ut, mollis libero. Ut scelerisque lacus interdum consectetur sodales.
                </p>
                <ul>
                <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
                 <li>Curabitur luctus sapien augue, mattis faucibus nisi vehicula nec.</li>
                 <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor.</li>
                 <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                 <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                </ul>
                
             </div>
             <div className="One">
                <h1>03. Security</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex neque, elementum eu blandit in, ornare eu purus. Fusce eu <br /> rhoncus mi, quis ultrices lacus. Phasellus id pellentesque nulla. Cras erat nisi, mattis et efficitur et,<br /> iaculis a lacus. Fusce gravida augue quis leo facilisis.
                </p>
                
             </div>
             <div className="One">
                <h1>04. Privacy & Policy</h1>
               <p>
               Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit <br /> tristique metus. Vestibulum maximus nec justo sed maximus. Vivamus sit amet turpis sem. Integer vitae tortor ac ex <br /> scelerisque facilisis ac vitae urna. In hac habitasse platea dictumst. Maecenas imperdiet tortor arcu, nec tincidunt <br />neque malesuada volutpat.
               </p>
                <ul>
                <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
                 <li>Curabitur luctus sapien augue, mattis faucibus nisi vehicula nec.</li>
                 <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor.</li>
                 <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                 <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                </ul>
                <p>
                Fusce rutrum mauris sit amet justo rutrum, ut sodales lorem ullamcorper. Aliquam vitae laculis urna. Nulla vitae mi <br /> vel nisi viverra ullamcorper vel elementum est. Mauris vitae elit nec enim tincidunt aliquet. Donec ultrices nulla a <br /> enim pulvinar, quis pulvinar lacus consectetur. Donec dignissim, risus nec mollis efficitur, turpis erat blandit urna, <br />eget elementum lacus lectus eget lorem. 
                </p>
             </div>
        </div>
        <Footer />
    </div>
    

   </Layout>
  )
}

export default Terms
