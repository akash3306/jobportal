
import './Layout.css'
import Navbar from '../Navbar/Navbar'


function Layout({children,token, settoken}) {
  return (
    <div className='main-layout'>
      <Navbar token={token} settoken={settoken} />
      {children}
      
    </div>
  )
}

export default Layout
