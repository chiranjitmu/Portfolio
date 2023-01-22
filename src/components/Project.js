import React from 'react'
import Jump from 'react-reveal/Jump';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import './Project.css'

function Project() {
 return (
    <div className='project'>

      <Jump>
      <h1 className='projects' id='project'>PROJECT</h1>
      <hr className='line-6'></hr>
      <hr className='line-7'></hr>
      </Jump>

      <Bounce right>
      <button className='projects-tagbackground'></button>
      <h1 className='projects-tag'>Projects</h1>
      <a className='tinder-link' href='https://chiranjitmu.github.io/Banaoproject'>Tinder-clone</a>
      <a className='hotstar-link' href='https://disney-hotstarclone.netlify.app/'>Hotstar-clone</a>
      <a className='bootstrap-link' href='https://chiranjitmu.github.io/Banaoproject/'>Bootstrap-project</a>
      </Bounce>


      <RubberBand>
     <hr className='line-15'></hr>
     <hr className='line-16'></hr>
     <hr className='line-17'></hr>
     <hr className='line-18'></hr>
      </RubberBand>

        <hr className='line-8'></hr>

    </div>
  )
}

export default Project