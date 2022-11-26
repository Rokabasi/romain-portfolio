import React from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
function Intro() {
  return (
    <div className='intro'>
        <div className="i-left">
        <div className="i-name">
            <span>Hy! I am</span>
            <span>Romain KABASI</span>
            <span>Fullstack developper with high level of experience in web designing and development, producting the Quality work
            </span>
        </div>
        <button className="button i-button">
            Hire me
        </button>
        <div className="i-icons">
            <a href="https://github.com/Rokabasi" >
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/romain-kabasi-b14422207/" >
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/hy" >
              <img src={Instagram} alt="" />
            </a>
          
    
        </div>
        </div>
        <div className="i-right">
            I am right side
        </div>
    </div>
  )
}

export default Intro