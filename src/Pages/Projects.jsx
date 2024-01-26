import React from 'react';
import Navbar from '../Components/Navbar';
import landingVideo from '../Assets/background.mp4';
import mechat from '../Assets/Projects/mechat.png';
import NotionClone from '../Assets/Projects/NotionClone.png';
import MindMender from '../Assets/Projects/MindMender.png';
import RepsNSets from '../Assets/Projects/RepsNSets.png';
import photoport from '../Assets/Projects/photoport.png';

function Projects() {
  const ProjectData = [
    {
      id: 1,
      CardImage: mechat,
    },
    {
      id: 2,
      CardImage: NotionClone,
    },
    {
      id: 3,
      CardImage: MindMender,
    },
    {
      id: 4,
      CardImage: RepsNSets,
    },
    {
      id: 5,
      CardImage: photoport,
    },
  ];

  return (
    <>
      <Navbar />
      <video autoPlay muted loop className='video-background'>
        <source src={landingVideo} type='video/mp4' />
      </video>
      <h1 className='text-center mt-5 text-white font-mono text-2xl'>PROJECTS</h1>
      <div className='grid grid-cols-3 gap-12 p-7 ml-5'>
        {ProjectData.map((item, id) => {
          return (
            <div key={id} className='proj-card border border-solid border-white relative'>
              <img src={item.CardImage} alt={`project-card-${id}`} className='w-100 h-80'></img>
              <div className='buttons'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'>
                  View Details
                </button>
                <button className='bg-green-500 text-white px-4 py-2 rounded-md'>
                  GitHub Repo
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
