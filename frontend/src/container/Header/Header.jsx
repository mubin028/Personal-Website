import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './Header.scss'
import { Typewriter } from 'react-simple-typewriter'



const Header = () => {
  return (
    <div id = 'home' className='app__header app__flex'>
      <motion.div whileInView={{x:[-100,0], opacity: [0,1]}}
      transition ={{duration: 0.5}}
      className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
          </div>
          <main id="container">
  <div id="terminal">   
    <section id="terminal__bar">          
      <div id="bar__buttons">            
        <button class="bar__button" id="bar__button--exit">&#10005;</button>            
        <button class="bar__button">&#9472;</button>                
        <button class="bar__button">&#9723;</button>          
      </div>          
      <p id="bar__user">mubin@ubuntu: ~</p>        
    </section>        
    <section id="terminal__body">          
      <div id="terminal__prompt">            
        <span id="terminal__prompt--user">Mubin@ubuntu:</span>            
        <span id="terminal__prompt--location">~</span>            
        <span id="terminal__prompt--bling">$</span>     
        <span className="terminal__typing">
         
        <Typewriter className = "header-text"
            words={["Hey! I'm Mubin Qureshi","I'm a BBA/Computer Science Student at Wilfrid Laurier University", "I'm an avid car enthusiast", "I'm an avid traveler", "I'm also an aspiring Software Developer"]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>            
      </div>        
    </section>      
  </div>    
</main>
          
        </div>
      </motion.div>
    </div>
  )
}

export default Header