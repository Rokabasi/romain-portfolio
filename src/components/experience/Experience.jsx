import "./Experience.css";
import { themeContext } from "../../Context";
import { useContext } from "react";



function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>1+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>10+</div>
        <span>completed</span>
        <span>projetcs</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>1+</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  );
}

export default Experience;
