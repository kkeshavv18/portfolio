import "./HeroimgStyles.css";
import React from "react";
// import TypewriterEffect from "react-typewriter-effect";
import Typewriter from "typewriter-effect";

function Typewriterr() {
  return (
    <p>
      {
        <Typewriter
          options={{
            strings: ["a web developer", "a computer teacher"],
            autoStart: true,
            loop: true,
          }}
        />
      }
    </p>
  );
}
export default Typewriterr;
