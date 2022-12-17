import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

function Footer() {
  return (
    <div className='footer'>
      <img src={Wave} alt='' style={{width:'100%'}}/>
      <div className='f-content'>
          <span>kabasiromain@gmail.com</span>
          <div className='f-icons'>
            <Insta coor='white' size='3rem'/>
            <Facebook coor='white' size='3rem'/>
            <Github coor='white' size='3rem'/>
          </div>
      </div>
    </div>
  )
}

export default Footer