import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import dac from "../../img/dac.png";
import womenintech from "../../img/womenintech.png";
import MusicApp from "../../img/musicapp.png";
import vlab from "../../img/vlab.png";
import cg from "../../img/cg.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projets</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://vlab-dataview.vercel.app/">
            {" "}
            <img src={vlab} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://challenge-digital-africa-rokabashi9.kda-dev-web-2022-classe-b.repl.co/">
            <img src={dac} alt="" />
          </a>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <a href="https://mwasitech7.wordifysites.com/">
            {" "}
            <img src={womenintech} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://clublegenial.vercel.app/">
            <img src={cg} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
