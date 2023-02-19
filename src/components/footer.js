import "./footerStyles.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="address">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Ratuwamai-8, Morang</p>
              <p>Nepal</p>
            </div>
          </div>

          <div className="contact">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <span style={{ color: "white" }}>9814321355</span>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <span style={{ color: "white" }}>keshavkattel1998@gmail.com</span>
            </h4>
          </div>
        </div>
        <div className="right">
          <h2 style={{ color: "white" }}>These are my Social Handles</h2>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100009131654148"
              target="_blank"
            >
              <FaFacebook
                size={30}
                style={{
                  color: "white",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            </a>

            <a href="https://www.instagram.com/keshav.kattel/" target="_blank">
              {" "}
              <FaInstagram
                size={30}
                style={{
                  color: "white",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            </a>

            <a href="https://github.com/kkeshavv18" target="_blank">
              {" "}
              <FaGithub
                size={30}
                style={{
                  color: "white",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            </a>
            {/* https://www.linkedin.com/in/keshav-kattel-30b155262 */}
            <a href="https://www.linkedin.com/in/keshavkattel" target="_blank">
              <FaLinkedin
                size={30}
                style={{
                  color: "white",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
