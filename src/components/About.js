import React from 'react';
import Fade from 'react-reveal/Zoom';
import './About.css'

function About() {
  
  return (
    <div className='about'>
    <Fade  right big cascade>
      <h1 className='about-me' id='about'>ABOUT ME</h1>
      <h6 className='about-choose'>Why Choose Me?</h6>
      <hr className='line-3'></hr>
      <hr className='line-4'></hr>
      </Fade>

      <Fade  left big cascade>
      <span className='background-shade'></span>  
      </Fade>
      <Fade  right big cascade>
      <img src='./mypic.jpeg' alt='' className='background-img'></img>
      </Fade>

      <Fade cascade>
      <span className='about-info'>
      I'm Chiranjit Mukherjee
      As a skilled React developer, I have a strong understanding
      of the framework and its ecosystem. <span>I am able to create dynamic 
      and responsive user interfaces, utilizing the latest libraries </span>
      and technologies. 
      </span>
      <span className='about-knowledge'>Knowledge:
         <li className='list'>React</li> 
         <li>Html</li>
         <li>CSS</li>
         <li>JavaScript</li>
         <li>C++</li>
      </span>
      </Fade>

      <hr className='line-5'></hr>
      </div>
  )
}

export default About