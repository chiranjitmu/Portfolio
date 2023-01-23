import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='Header'>
        <h1 className='portfolio-logo'>PORTFOLIO</h1>

        <a className='header-home' id='home' href='#home'>HOME</a>
        <a className='header-about' href='#about'>ABOUT</a>
        <a className='header-project' href='#project'>PROJECT</a>
        <a className='header-contact' href='#contact'>CONTACT</a>


        <hr className='line-1'></hr>
       </div>

  )
}

export default Header