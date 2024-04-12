import { BrowserRouter as Rot, Route, Routes } from 'react-router-dom';
import './App.css';

import Page from './Error/Error'
import Signup from './Components/SIgnUp/Signup';
import Login from './Components/Login/Login'
import FIndJobs from './Components/FInd Jobs/FindJobs'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Terms from './Components/Terms/Terms';
import Blog from './Components/Blog/Blog';
import ScrollToTop from './Components/ScrollToTop/scrollToTop';
import Homme from './Components/Home/Homme';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPaassword';
import Dashboard from './Components/Dashboard/Dashboard'
import JobsView from './Components/JobsView/JobsView';
import Profile from './Components/Dashboard/Profile'
import Change from './Components/Dashboard/Change'
import Social from './Components/Dashboard/Social'

import { useState } from 'react';
import Info from './Components/Dashboard/Info';

function App() {
 const [login, setLogin] = useState(false)

  return (
    <Rot>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homme token={login} settoken={setLogin}/>}></Route>
        <Route path="find" element={<FIndJobs/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="terms" element={<Terms/>}></Route>
        <Route path="blog" element={<Blog/>}></Route>
        <Route path="find/:id/:title" element={<JobsView/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/login" element={login? <Homme token={login} settoken={setLogin}/>: <Login token={login} settoken={setLogin}/>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword /> }></Route>
        <Route path="/resetPassword/:token" element={<ResetPassword/> }></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="general" element={<Profile/>}/>
          <Route path="info" element={<Info/>}/>
          <Route path="change" element={<Change/>}/>
          <Route path="social" element={<Social/>}/>
        </Route>
        <Route path="*" element={<Page/>}/>
      </Routes>
    </Rot>
   
  );
}

export default App;
