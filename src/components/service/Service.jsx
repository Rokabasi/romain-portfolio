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
            <div style={{left:'14rem'}}>
              <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma Sketch Adobe"}

              />
            </div>
            <div style={{left:'-4rem',top:"12rem"}}>
              <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma Sketch Adobe"}

              />
            </div>
            <div style={{left:'12rem',top:"19rem"}}>
              <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma Sketch Adobe"}

              />
            </div>
        </div>
    </div>
  )
}

export default Services