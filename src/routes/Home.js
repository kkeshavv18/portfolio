import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/footer";
import Contactcontent from "../components/Contactcontent";
import Aboutcontent from "../components/Aboutcontent";

// We can do the same thing in following way also . We are simply creating the home component
// function home() {
//   return <div>This is keshav's Home</div>;
// }

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <div
        style={{
          padding: "2rem 1rem 1rem 0",
          textAlign: "center",
          color: "#ff0032",
          fontWeight: "700",
          fontSize: "2rem",
        }}
      >
        ABOUT ME
      </div>
      <Aboutcontent />
      <Contactcontent />
      <Footer />
    </div>
  );
};

export default Home;
