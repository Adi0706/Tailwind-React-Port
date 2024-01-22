import React from 'react'
import Navbar from '../Components/Navbar'
import landingVideo from '../Assets/background.mp4'; 
import aboutImage from '../Assets/aboutimage.png';
import {Link} from 'react-router-dom';
import ServiceLogo from '../Assets/servicefigma.png';

function About() {
  return (
    <>
    <Navbar/>
    <video autoPlay muted loop className='video-background'>
        <source src={landingVideo} type='video/mp4' />
        
      </video>
    
      <div className='border border-solid border-white text-white h-screen flex items-center justify-around'>
       
        <div className="about-1 flex flex-col items-center">
       
        <img src={aboutImage} alt='about-image' className='w-56 h-56 rounded-full'></img>
        <div className=' text-center max-w-lg mx-auto'>
          <p className='font-mono'>Who am I ? </p><br/>
          <p className='text-center'>
I am a Software Developer based in New Delhi, India, with a passion for building intuitive and dynamic user interfaces. Additionally, I am also proficient in backend development.<br/> <span className='text-red-400'><Link to='/contacts'>Let's connect!</Link></span></p>
          </div>
        </div>
        <div className='border border-solid border-white text-white flex flex-col items-center justify-between'>
        <img src={ServiceLogo} alt='about-image' className='w-110 h-48 '></img>
        <p>hello bhai</p>
        </div>
      </div>
    </>
  )
}

export default About