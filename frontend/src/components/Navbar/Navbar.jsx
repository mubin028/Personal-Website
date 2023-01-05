import React from 'react';
import './Navbar.scss';
import {images} from '../../constants';
import { HiMenu,HiX} from "react-icons/hi";
import {animate, motion} from 'framer-motion';
import { useState } from 'react';


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="app__navbar">
      <motion.div className="app__navbar-logo"
      whileHover={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 270, 180, 360, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{ 
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.5
      }}
      >
        <img src ={images.logo} alt="logo" />
      </motion.div>
      <ul className="app__navbar-links">
        {['home','About','Skills','Projects','resume'].map((item)=> (
        <li className = "app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenu onClick={()=> setToggle(true)}/>
          {toggle &&(
            <motion.div 
            whileInView={{ x:[300,0]}}
            transition={{duration: 0.85,ease: 'easeOut'}}
            
            > 
              <HiX onClick={()=> setToggle(false)}/>
            <ul> 
              {['home','About','Skills','Projects','resume'].map((item)=> (
        <li key={item}>
            <a href={`#${item}`} onClick={()=> setToggle(false)} >{item}</a>
          </li> 
         
        ))}
        </ul>
            </motion.div>
          )

          }


        </div>


    </nav>
  )
}

export default Navbar