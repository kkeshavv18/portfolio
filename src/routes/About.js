import React from "react";

import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Aboutcontent from "../components/Aboutcontent";

const about = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT ME" text="I am a full stack web developer" />
      <Aboutcontent />
      <Footer />
    </div>
  );
};

export default about;
