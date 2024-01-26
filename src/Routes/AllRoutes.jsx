import React from 'react'
import {Routes,Route} from 'react-router-dom' ;
import Home from '../Pages/Home';
import About from '../Pages/About';
// import Experience from '../Pages/Experience';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/experience' element={<Experience/>}></Route> */}
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes