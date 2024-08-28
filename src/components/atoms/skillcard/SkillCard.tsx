import { CardProp } from "../../../types";
import "./SkillCard.css";

function Card({ skill, svg }: CardProp) {
  return (
    <div className="card" key={skill}>
      <i className="icon-container-icon">{svg}</i>
      <h3 className="title">{skill}</h3>
    </div>
  );
}

export default Card;
