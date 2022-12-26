import React,{useContext} from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import xsq from "../../img/xsq.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glassesimoji from '../..//img/glassesimoji.png'
import FloatingDiv from '../floatingDiv/FloatingDiv'
import { themeContext } from '../../Context'


function Intro() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className="i-left">
        <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}> Hey! I am</span>
            <span>Romain KABASI</span>
            <span style={{ color: darkMode ? "white" : "" }}>Fullstack developper with high level of experience in web designing and development, producting the Quality work
            </span>
        </div>
        <button className="button i-button">
            Here is me
        </button>
        <div className="i-icons">
            <a href="https://github.com/Rokabasi" >
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/romain-kabasi-b14422207/" >
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/romain_kabashi/" >
              <img src={Instagram} alt="" />
            </a>
          
    
        </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={xsq} width="200rem" height="290vh" alt="" />
          <img src={glassesimoji} alt="" />
          <div className='i-floating-div1' id="floating-divs2">
            <FloatingDiv style={{ color: darkMode ? "black" : "" }} image={crown} text1='Full stack' text2='developer'/>
          </div>
          <div className='i-floating-div2' id="floating-divs1">
            <FloatingDiv image={thumbup} text1='Best Design' text2='Award'/>
          </div>
          <div className='blur' style={{background : "rgb(238 210 255)"}}>

          </div>
          <div className='blur' style={{background : "#C1F5FF",
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
            }}>

          </div>
        </div>
    </div>
  )
}

export default Intro