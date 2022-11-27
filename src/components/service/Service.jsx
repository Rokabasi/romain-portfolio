import React from 'react'
import './Service.css'
import Card from '../card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'


function Services () {
  return (
    <div className='services'>

        <div className='awesome'>
          <span>My Awesome</span>
          <span>services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            non repudiandae architecto voluptates recusandae at aut autem?
          </span>
          <button className='button s-button'>Dowload CV</button>
          <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className='cards'>
            <div>
              <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma,Sketch,Photoshop,Adobe,Adobe xd"}

              />
            </div>
        </div>
    </div>
  )
}

export default Services