import React from 'react'
import Flip from 'react-reveal/Flip';
import Wobble from 'react-reveal/Wobble';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
       
       <Flip right cascade>
      <h1 className='contact-head' id='contact'>CONTACT</h1>
      <hr className='line-9'></hr>
      <hr className='line-10'></hr>
      </Flip>

      <Wobble>
      <h1 className='contact-tag'>Let's work together..</h1>
      </Wobble>
     
      <Fade left>
     <input placeholder='FULL NAME' className='contact-name' pattern="[a-zA-Z]+" required/>
     <input placeholder='PHONE NUMBER' className='contact-number' pattern="[0-9]+" required/>
     <input placeholder='EMAIL' className='contact-email' pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$" required/>
     <textarea placeholder='MESSAGE' className='contact-message' required/>
     </Fade>
      
     <Fade right>
     <hr className='line-11'></hr>
     <hr className='line-12'></hr>
     <hr className='line-13'></hr>
     <hr className='line-14'></hr>
     </Fade>

     <Bounce top cascade>
     <a className='contact-submit'>Send</a>
     </Bounce>

    </div>
  )
}

export default Contact