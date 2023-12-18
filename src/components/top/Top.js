import React from 'react'
import './top.css'
import cybot from '../../image/icon/cybot.png'
import LOL from '../../image/icon/logo2.png'
export default function Top() {
  const isMobile = window.innerWidth <= 768
  const menuBtn = () => {
    if(document.querySelector(`.showing`)){
      document.querySelector(`.showing`).classList.remove(`showing`)
    }else {
      document.querySelector(`.menu`).classList.add(`showing`)
    }
  }
  return (
    <div className={isMobile ? 'top' :'top no-responsive'}>
        {isMobile ? (<> <div className='top-btn' onClick={menuBtn}><img src={cybot} /></div>
        <div className='top-btn'><img src={LOL} /></div>
        <div className='top-btn'> </div>
        <div className='menu'></div></>) : (
        <div></div>
        )}
      
    </div>
  )
}
