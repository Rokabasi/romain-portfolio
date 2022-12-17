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
    <div className="services">
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          non repudiandae architecto voluptates recusandae at aut autem?
        </span>
        <a href={cv} download>
          <button className="button s-button">Dowload CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "30rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma Sketch Adobe"}
          />
        </div>
        <div style={{ left: "5rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html Css JavaScript React express"}
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
