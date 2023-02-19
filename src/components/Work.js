import "./WorkcardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from "react";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              desc={val.desc}
              preview={val.preview}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Work;
