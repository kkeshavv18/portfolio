import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg2 from "../components/Heroimg2";
import Contactcontent from "../components/Contactcontent";

const contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT ME" text="Feel free to leave a message" />
      <Contactcontent />
      <Footer />
    </div>
  );
};

export default contact;
