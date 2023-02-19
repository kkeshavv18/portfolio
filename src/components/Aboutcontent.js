import "./AboutcontentStyles.css";
import React, { useState } from "react";

function Aboutcontent() {
  const [toggleTab, setToggleTab] = useState(1);
  function toggleState(index) {
    setToggleTab(index);
  }
  return (
    <div clssName="about">
      <div className="row">
        <div className="column img-column">
          <div className="about-img"></div>
        </div>
        <div className="column">
          <div className="tabs">
            <div
              className={
                toggleTab === 1 ? "single-tab active-tab" : "single-tab"
              }
              onClick={() => toggleState(1)}
            >
              <h2>About</h2>
            </div>
            <div
              className={
                toggleTab === 2 ? "single-tab active-tab" : "single-tab"
              }
              onClick={() => toggleState(2)}
            >
              <h2>Skills</h2>
            </div>
            <div
              className={
                toggleTab === 3 ? "single-tab active-tab" : "single-tab"
              }
              onClick={() => toggleState(3)}
            >
              <h2>Experience</h2>
            </div>
          </div>
          <div className="tab-content">
            {/* About content  */}
            <div
              className={toggleTab === 1 ? "content active-content" : "content"}
            >
              <h2>My Story</h2>
              <p>
                I’m an independent web developer who is passionate about coding.
                For the last 3 years, I have been learning web development from
                basic to advance and started building projects. Currently, I am
                working as a computer teacher in Sayapatri English School and I
                want to be a great web developer one day. Outside of work, I
                like to play cricket and badminton and I also love to explore
                new places.
              </p>
            </div>

            {/* Skills Content  */}
            <div
              className={toggleTab === 2 ? "content active-content" : "content"}
            >
              <h2>Skills</h2>
              <div className="skills-row">
                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>HTML</h3>
                    <div className="progress">
                      <div className="progress-bar Html">
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>CSS</h3>
                    <div className="progress">
                      <div className="progress-bar Css">
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>bootstrap</h3>
                    <div className="progress">
                      <div className="progress-bar bootstrap">
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>Javascript</h3>
                    <div className="progress">
                      <div className="progress-bar Javascript">
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>React JS</h3>
                    <div className="progress">
                      <div className="progress-bar React">
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>Node JS</h3>
                    <div className="progress">
                      <div className="progress-bar Node">
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>Material UI</h3>
                    <div className="progress">
                      <div className="progress-bar material-ui">
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>PHP</h3>
                    <div className="progress">
                      <div className="progress-bar php">
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>Express JS</h3>
                    <div className="progress">
                      <div className="progress-bar express">
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills-column">
                  <div className="progress-wrap">
                    <h3>jQuery</h3>
                    <div className="progress">
                      <div className="progress-bar jQuery">
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Content  */}
            <div
              className={toggleTab === 3 ? "content active-content" : "content"}
            >
              <div className="exp-column">
                <h3>Teacher</h3>
                <span>[2019-Present]</span>
                <p>
                  Teaching is my passion. I am working as a secondary level
                  computer teacher at Sayapatri English School.
                </p>
              </div>

              <div className="exp-column">
                <h3>Web Developer</h3>
                <span>[2020-Present]</span>
                <p>
                  I started web developement from 2020 A.D and doing it with
                  same dedication till now.
                </p>
              </div>

              <div className="exp-column">
                <h3>Teacher</h3>
                <span>[2017-2018]</span>
                <p>
                  I worked as a computer teacher at Bhanubhakta Academy for 1
                  year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutcontent;
