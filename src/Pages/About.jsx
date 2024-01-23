import React from 'react';
import Navbar from '../Components/Navbar';
import landingVideo from '../Assets/background.mp4';
import aboutImage from '../Assets/aboutimage.png';
import { Link } from 'react-router-dom';
import ServiceLogo from '../Assets/servicefigma.png';
import Cprog from '../Assets/icons/c-prog.png';
import figma from '../Assets/icons/figma.png';
import Cpp from '../Assets/icons/icons8-c++-48.png';
import Html from '../Assets/icons/icons8-html-48.png';
import Css from '../Assets/icons/icons8-css-100.png';
import Javascript from '../Assets/icons/icons8-javascript-48.png';
import ReactIcon from '../Assets/icons/icons8-react-100.png';
import GitIcon from '../Assets/icons/icons8-git-48.png';
import GithubIcon from '../Assets/icons/icons8-github-50.png';
import PostmanIcon from '../Assets/icons/icons8-postman-api-64.png';
import nodejs from '../Assets/icons/icons8-nodejs-48.png';
import mongodb from '../Assets/icons/icons8-mongo-db-64.png';
import { motion } from 'framer-motion';

function About() {
  const icons = [
    { icon: Cprog },
    { icon: Cpp },
    { icon: Html },
    { icon: Css },
    { icon: Javascript },
    { icon: ReactIcon },
    { icon: GitIcon },
    { icon: GithubIcon },
    { icon: PostmanIcon },
    { icon: figma },
    { icon: nodejs },
    { icon: mongodb },
  ];

  return (
    <>
      <Navbar />
      <video autoPlay muted loop className='video-background'>
        <source src={landingVideo} type='video/mp4' />
      </video>

      <div className=' text-white h-screen flex items-center justify-start ml-80'>
        <div className='about-1 flex flex-col items-center'>
          <img src={aboutImage} alt='about-image' className='w-72 h-72 rounded-full'></img>
          <div className='text-center max-w-lg mx-auto'>
            <p className='font-mono'>Who am I ? </p>
            <br />
            <p className='text-center'>
              I am a Software Developer based in New Delhi, India, with a passion for building intuitive and dynamic user interfaces. Additionally, I am also proficient in backend development.
              <br /> <span className='text-red-400'><Link to='/contacts'>Let's connect!</Link></span>
            </p>
          </div>
        </div>
        
        <div className=' flex flex-col items-center justify-between '>
          <img src={ServiceLogo} alt='about-image' className='w-110 h-48'></img>
          <div className=' grid grid-cols-3 gap-12 p-7 '>
            {icons.map((item, index) => (
              <motion.div
                key={index}
                className='skill-card bg-zinc-200 rounded-md cursor-pointer '
                whileHover={{ scale: 1.1, rotate: [0, 5, 0, -5, 0], transition: { duration: 0.5 } }}
              >
                <img src={item.icon} alt={`icon-pic-${index}`} className='w-24 h-24 object-cover'></img>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
