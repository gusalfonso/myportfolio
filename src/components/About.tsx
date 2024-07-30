import { BsPersonCheck } from "react-icons/bs";
import "../css/About.css";
import { DATA } from "../cv/cv";

function About() {
  return (
    <section id="about">
      <div className="title-container">
        <span className="section-icon">{<BsPersonCheck />}</span>
        <h1 className="section-title">About Me</h1>
      </div>
      <p className="summary">{DATA.summary}</p>
    </section>
  );
}

export default About;
