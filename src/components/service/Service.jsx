import React, {useContext} from "react";
import "./Service.css";
import Card from "../card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import cv from "../../files/cv.pdf";
import { themeContext } from "../../Context";

function Services() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span style={{ color: darkMode ? "white" : "" ,lineHeight : "30px",fontSize:"1rem" }}>
        As an international full-stack developer, I cover every aspect of full-stack development - 
        <br/>
        front-end and back-end, databases, servers, APIs, DevOps, and version controlling systems.


          <br />
         Set a faster pace for the growth of your business with my full-stack development services.
        </span>
        <a href={cv} download>
          <button className="button s-button">Dowload CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "25rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma Sketch Adobe"}
          />
        </div>
        <div style={{ left: "2rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html Css JavaScript React Node Express"}
          />
        </div>
        <div style={{ left: "23rem", top: "25rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma Sketch Adobe"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
