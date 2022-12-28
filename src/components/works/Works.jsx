import React, { useContext } from "react";
import "./Works.css";
import cgju from "../../img/cgju.png";
import digitalafrica from "../../img/digitalafrica.png";
import kda from "../../img/kda.png";
import vodacom from "../../img/vodacom.png";
import mwasitech from "../../img/mwasitech.png";
import { themeContext } from "../../Context";


function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span
          style={{
            color: darkMode ? "white" : "",
            lineHeight: "2rem",
            fontSize: "1.2rem",
          }}
        >
          Vodacom Congo ( VLab ) : build an app for visualization of data
          <br />
          Club Genial Je connais L'Univers : build an Quiz app
          <br />
          Kinshasa Digital Academy : build a Quiz app and youtube clone
          <br />
          Mwasi tech : build a platform for showing and popularizing women in
          tech
          <br />
          Digital africa : build a landing page for startup4talents challenge
        </span>
        <button className="button s-button">Here is me</button>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={kda} style={{ width: "10rem" }} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={digitalafrica} style={{ width: "10rem" }} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={vodacom} style={{ width: "10rem" }} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={cgju} style={{ width: "10rem" }} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mwasitech} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
