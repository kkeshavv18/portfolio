import "./WorkcardStyles.css";

function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.desc}</p>
        <div className="project-btns">
          <a href={props.preview} className="btn">
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
}
export default WorkCard;
