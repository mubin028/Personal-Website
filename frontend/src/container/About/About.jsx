import React from 'react';
import './About.scss';
import {motion} from "framer-motion";
import {images} from '../../constants';


  const abouts=[
    {title: "Staff Accountant", description: "Conducted Financial Audits in the Financial Institutions and Real Estate group at KPMG specifically handling Cash and Expense accounts.",imgUrl:images.about01},
    {title: "Cloud Consultant", description: 
    "Worked through an entire transformation project from ideation to research to presentation of the case in front of global Director level executives.",imgUrl:images.about02},
    {title: "Data Analysis and Marketing Co-op", description: "Cleaned and updated entries in the Artemis database of over 20,000 records to improve searchability and accuracy of data.",imgUrl:images.about03},
  ];

  const About = () => {
  return (
    <>
    <motion.div whileInView={{x:[100,0], opacity: [0,1]}}
      transition ={{duration: 0.5}}
      >
      <h2 className='head-text'>
        <p className='inner-text'>Here's a bit about myself</p>
      </h2>
    </motion.div>
    <motion.div whileInView={{x:[-100,0], opacity: [0,1]}}
      transition ={{duration: 0.5}}
      >
    <h1 className="Work-title">
        Where i've worked
      </h1>
      </motion.div>
      <div className='app__profiles'>
        {abouts.map((about, index)=> (
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          className='app__profile-item'
          key={about.title+index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='job-text'style={{marginTop:20}}>{about.title}</h2>
            <p className='job-p'style={{marginTop:20}}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About