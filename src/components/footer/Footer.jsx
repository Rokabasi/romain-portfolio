import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave.png";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kabasiromain@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/romain_kabashi/?hl=fr"
            style={{ color: "white" }}
          >
            <Insta coor="white" size="3rem" />
          </a>

          <a
            href="https://web.facebook.com/romain.falcao.7/"
            style={{ color: "white" }}
          >
            <Facebook coor="white" size="3rem" />
          </a>
          <a href="https://github.com/Rokabasi" style={{ color: "white" }}>
            <Github coor="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
