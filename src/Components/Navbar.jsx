import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
<>
  <nav className='mt-0  flex items-center justify-between'>
  <span className='logo'><Link to='/'>ADITYA BHATTACHARJEE</Link></span>
    <ul className=' text-white flex items-center justify-start mr-12'>
       <Link to='/about'><li>ABOUT</li></Link> 
       <Link to='/experience'><li>EXPERIENCE</li></Link> 
       <Link to='/projects'><li>PROJECTS</li></Link> 
       <Link to='/contacts'><li>CONTACT ME</li></Link> 
       <Link to='/contacts'><li>RESUME</li></Link> 
    </ul>
    
  </nav>
</>
  )
}

export default Navbar