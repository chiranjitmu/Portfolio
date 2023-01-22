import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Roll, Bounce } from 'react-reveal';
import './Home.css'


function Home() {

  return (
    <div className='Home'>
   <div>
     <TypeAnimation className='typer'
       sequence={[
        'I AM CHIRANJIT MUKHERJEE',
        1000,
        'I AM WEB DEVELOPER',
        2000,
      ]}
      wrapper="div"
      speed={60}
      cursor={true}
      repeat={Infinity}
    />

   <Roll top cascade>
      <p className='quote'>Whatever you are, be a good one....</p>
      </Roll>
   </div>


  <div>
  <img src='./mypic2.jpeg' alt='mypic' className='mypic'/>
  </div>

  
  <Bounce top cascade>
  <a className='button-gettouch' href='#contact'>
    GET IN TOUCH
    </a> 
        </Bounce>

    <hr className='line-2'></hr>
    </div>
  )
}

export default Home