import { BsPersonCheck } from "react-icons/bs";
import "../css/About.css";
import { DATA } from "../cv/cv";

function About() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="title-container">
        <span className="section-icon">{<BsPersonCheck />}</span>
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="summary">
        {DATA.summary
          .split(".  ")
          .map(
            (sentence, index) =>
              sentence.trim() !== "" && <p key={index}>{sentence.trim()}.</p>
          )}
      </div>
    </section>
  );
}

export default About;
