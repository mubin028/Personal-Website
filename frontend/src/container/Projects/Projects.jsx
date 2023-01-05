import React from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';
import { useRef } from "react";



const Projects = () => {
  const constraintsRef = useRef(null);

  return (
    
    <div id = 'Projects' className='project-comp' >
    <div className="projects-title">
        <span>Projects</span>
      </div>

    <div className="projects">
    <motion.div className="projects-container" ref={constraintsRef}>

      <motion.div className="projects-item" drag dragConstraints={constraintsRef}  whileHover={{scale:1.1}}>
      
      <div className="projects-title-container">
      <span className="projects-name">Inverted Space Invaders</span>
      <span className="projects-tech">Java, Swing, AWT</span>
      </div>


      <ul className="projects-desc">
        <li>Built a version of Space Invaders where instead of the ship, the player controls the Aliens array. This was done
using GUI elements along with action listeners.</li>
<li>The game also saved and loaded a player’s high score into a file</li>
      </ul>
      <a type='button' className = 'project-link' data-button="true" href='https://github.com/mubin028/Inverted-Space-Invaders' target='_blank' rel="noreferrer">View Code</a>
      </motion.div>


      <motion.div className="projects-item" drag dragConstraints={constraintsRef}  whileHover={{scale:1.1}}>
      
      <div className="projects-title-container">
      <span className="projects-name">That's Crazy!</span>
      <span className = "projects-awards">Hack The North 2022 -API Finalist 
      </span>
      <span className="projects-tech">Python, Cohere API, Google Voice API</span>
      </div>


      <ul className="projects-desc">
        <li>Worked on a team of 3 individuals to build a CLI program using speech recognition and NLP to summarize text, generate freestyle song lyrics, and create blog posts </li>
        <li> Solely used and trained Cohere Natural language processing api on song lyrics from top Spotify songs which served as backbone for the CLI Application</li>      
        <li>Invited by Cohere to give real-life feedback on their API and several changes I suggested were implemented</li>
      </ul>
      <a type='button' className = 'project-link' data-button="true" href='https://github.com/mubin028/ThatsCrazy' target='_blank' rel="noreferrer">View Code</a>
      </motion.div>

      <motion.div className="projects-item" drag dragConstraints={constraintsRef}  whileHover={{scale:1.1}}>
      
      <div className="projects-title-container">
      <span className="projects-name">Personal Website</span>
      <span className = "projects-awards">You're here right now! 
      </span>
      <span className="projects-tech">React, HTML/CSS, Javascript, <br></br>Framer-Motion, bootsrap</span>
      </div>


      <ul className="projects-desc">
      <li> Built personal website showcasing my life and experiences</li>
      <li> Built components and implemented framer-motion for animations</li>
      <li> implemented bootstrap card elements</li>
       </ul>
      <a type='button' className = 'project-link' data-button="true" href='https://github.com/mubin028/ThatsCrazy' target='_blank' rel="noreferrer">View Code</a>
      </motion.div>


    </motion.div>
    
    </div>
  </div>
  )
};

export default Projects;