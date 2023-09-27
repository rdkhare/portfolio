import React, { useState } from 'react';
import groupAlarmImg from '../images/GroupAlarm.png';
import hdsToxImg from '../images/hdstox.png';
import '../index.css';
import CardFlip from 'react-card-flip';

const Projects = () => {
  const [flipped, setFlipped] = useState([false, false]);

  const handleCardClick = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  

  return (
    <section id="projects" className="bg-gray-800 py-20 font-mono">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-white">Projects</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <CardFlip
              isFlipped={flipped[0]}
              flipDirection="horizontal"
              className="rounded-md shadow-md p-10 hover:shadow-lg mb-4 hover:cursor-pointer project-card"
              containerStyle={{ width: '250px', height: '250px'}}
            >
              <div onClick={() => handleCardClick(0)} className="card-front" style={{ zIndex: flipped[0] ? '0' : '2', width: '100%', height: '100%', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <img
                  src={groupAlarmImg}
                  alt="GroupAlarm"
                  className="w-full h-full rounded-md hover:cursor-pointer transform hover:scale-105 transition duration-300"
                />
              </div>
              <div onClick={() => handleCardClick(0)} className="card-back hover:cursor-pointer" style={{ zIndex: flipped[0] ? '2' : '0', backgroundColor: '#F1F1F1', color: '#333', width: '100%', height: '100%', borderRadius: '8px' }}>
                <h3 className="text-xl text-black font-bold mb-3 py-5">GroupAlarm</h3>
                <p className="text-md text-black">
                  Using Swift and Cocoapods, I built an iOS app that allowed multiple users to connect to a single alarm clock.
                </p>
              </div>
            </CardFlip>
            <CardFlip
              isFlipped={flipped[1]}
              flipDirection="horizontal"
              className="rounded-md shadow-md p-10 hover:shadow-lg transform hover:scale-105 transition duration-300 mb-4 project-card"
              containerStyle={{ width: '250px', height: '250px' }}
            >
              <div onClick={() => handleCardClick(1)} className="card-front" style={{ zIndex: flipped[1] ? '0' : '2', width: '100%', height: '100%', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <img
                  src={hdsToxImg}
                  alt="HDSTox"
                  className="w-full h-full rounded-md hover:cursor-pointer transform hover:scale-105 transition duration-300"
                />
              </div>
              <div onClick={() => handleCardClick(1)} className="card-back hover:cursor-pointer" style={{ zIndex: flipped[1] ? '2' : '0', backgroundColor: '#F1F1F1', color: '#333', width: '100%', height: '100%', borderRadius: '8px' }}>
                <h3 className="text-xl text-black font-bold py-4">HDSTox</h3>
                <p className="text-md text-black ">
                  Imported bioinformatics data into a web & iOS app that summarized herbal supplements which had hepatotoxicity.
                </p>
              </div>
            </CardFlip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
