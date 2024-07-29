import { CardProp } from "../types";
import "../css/SkillCard.css";

function Card({ skill, svg }: CardProp) {
  return (
    <div className="card" key={skill}>
      <div className="icon-container">{svg}</div>
      <h3 className="title">{skill}</h3>
    </div>
  );
}

export default Card;
