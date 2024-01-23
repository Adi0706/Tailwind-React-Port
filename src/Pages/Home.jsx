import React from 'react';
import Navbar from '../Components/Navbar';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import landingVideo from '../Assets/background.mp4'; 
import landingPic from '../Assets/homepic.png';

function Home() {
  return (
    <>
      <Navbar />
      <video autoPlay muted loop className='video-background'>
        <source src={landingVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* <div className='overlay'></div> */}
      <div className="text flex items-center justify-center h-96 mt-48">
        <img src={landingPic} alt='Landing-pic' className='w-96 h-80 rounded-full' />
        <p className='text-4xl'>Aditya Bhattacharjee</p>
        <p className='text-lg m-2'>Software Developer</p>
        <span className='flex m-5 gap-7 '>
          <a href='https://github.com/Adi0706'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/aditya-bhattacharjee-288462215/'><FaLinkedin /></a>
        </span>
      </div>
    </>
  );
}

export default Home;
