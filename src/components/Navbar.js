import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }

  const [color, setColor] = useState(false);
  function changeColor() {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>PORTFOLIO</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <MdClose
            style={{ color: "#ff0032", width: "40px", height: "40px" }}
          />
        ) : (
          <FiMenu style={{ color: "#ff0032", width: "40px", height: "40px" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
