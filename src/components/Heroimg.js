import "./HeroimgStyles.css";
import PortfolioBg from "../assets/portfolio-bg.jpg";
import { Link } from "react-router-dom";
import CV from "../assets/cv.pdf";
import Typewriterr from "./typewriter";

function Heroimg() {
  return (
    <div classNmae="hero">
      <div className="mask">
        <img className="intro-img" src={PortfolioBg} alt="PortfolioBg" />
      </div>
      <div className="content1">
        <h1>HEY, I AM KESHAV</h1>
        <Typewriterr />

        <div className="buttons">
          <a href={CV} className="btn" download={CV}>
            Download CV
          </a>
          <Link to="/project" className="btn btn-light">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Heroimg;
