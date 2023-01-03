import './Travel.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {images} from '../../constants';
import {motion} from "framer-motion";


import React from 'react'

const Travel = () => {
  return (
     /* scrollable slideshow to showcase photos */
     
      
    <div className='travel'>
    <motion.div whileInView={{x:[100,0], opacity: [0,1]}} transition ={{duration: 0.5}}>
      <h1 className="travel-header">Where I've Travelled Recently</h1>
      </motion.div>
      <motion.div whileInView={{x:[-100,0], opacity: [0,1]}} transition ={{duration: 0.5}}>
      <div className='travel__container'>
        <div className='travel__wrapper'>
        
          <ul className='travel__items'>
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
              <Card.Img className = 'card-image' variant="top" src={images.usa} />
              <Card.Body> 
                <Card.Title className='card-title'>USA</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>

            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
              <Card.Img className = 'card-image' variant="top" src={images.paris}/>
              <Card.Body> 
                <Card.Title className='card-title'>France</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
            <Card.Img className = 'card-image' variant="top" src={images.belgium}/> <Card.Body> 
                <Card.Title className='card-title'>Belgium</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
            <Card.Img className = 'card-image' variant="top" src={images.amsterdam}/><Card.Body> 
                <Card.Title className='card-title'>The Netherlands</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
            <Card.Img className = 'card-image' variant="top" src={images.germany}/><Card.Body> 
                <Card.Title className='card-title'>Germany</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
            <Card.Img className = 'card-image' variant="top" src={images.swiss}/> <Card.Body> 
                <Card.Title className='card-title'>Switzerland</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
            <Card.Img className = 'card-image' variant="top" src={images.portugal}/> <Card.Body> 
                <Card.Title className='card-title'>Portugal</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
            <Card.Img className = 'card-image' variant="top" src={images.pakistan}/><Card.Body> 
                <Card.Title className='card-title'>Pakistan</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}>
            <Card className = "travel-card" style={{ width: '18rem' }}> 
            <Card.Img className = 'card-image' variant="top" src={images.qatar}/><Card.Body> 
                <Card.Title className='card-title'>Middle East</Card.Title>
              </Card.Body>
            </Card>
            </motion.div>
          </ul>
          
        </div>
      
      </div>
      </motion.div>
    </div>
    
  )
}

export default Travel