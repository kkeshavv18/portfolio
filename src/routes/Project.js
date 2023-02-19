import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg2 from "../components/Heroimg2";
import Work from "../components/Work";
// import Projectcard from "../components/Projectcard";

const project = () => {
  return (
    <div>
      <Header />
      <Heroimg2 heading="PROJECTS" text="These are some of my Projects" />
      <Work />
      <Footer />
    </div>
  );
};

export default project;
