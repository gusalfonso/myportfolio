import { FaTools } from "react-icons/fa";
import "../css/Skills.css";
import Carrousel from "./Carrousel";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="title-container">
        <span className="section-icon">{<FaTools />}</span>
        <h1 className="section-title">Skills</h1>
      </div>
      <Carrousel />
    </section>
  );
}

export default Skills;
