import React from 'react'
import Navbar from '../Components/Navbar'
import landingVideo from '../Assets/background.mp4'; 

function About() {
  return (
    <>
    <Navbar/>
    <video autoPlay muted loop className='video-background'>
        <source src={landingVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

export default About