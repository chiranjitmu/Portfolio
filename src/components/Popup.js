import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi'
import './Popup.css'

export default function Popup() {


    const [modal, setModal] = useState(false);

    const setToggel = () =>
    {
      setModal(!modal)
    }
  
    if(modal)
    {
      document.body.classList.add('active-modal')
    }else{
      document.body.classList.remove('active-modal')
    }
  
  
  
  
    return (
      <>
        <button 
        onClick={setToggel} 
        className='bt-open'>
         <AiOutlineMenu />
        </button>
  
      
        {modal && (  <div className='modal'>
            <div onClick={setToggel} className='overlay'></div>
              <div className='modal-content'>
               <a className="pop-home" onClick={setToggel} href='#home'>HOME</a>
               <a className="pop-about" onClick={setToggel} href='#about'>ABOUT</a>
               <a className="pop-project" onClick={setToggel} href='#project'>PROJECT</a>
               <a className="pop-contact" onClick={setToggel} href='#contact'>CONTACT</a>
               <button 
                 onClick={setToggel} 
                 className='bt-close'>
                <GiCancel />
               </button>
               </div>
            </div>
          )}        
      </>
        );
      }
  