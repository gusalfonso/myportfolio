import "../css/About.css";
import { DATA } from "../cv/cv";

function About() {
  return (
    <section id="about">
      <h1>About</h1>
      <p>{DATA.summary}</p>
    </section>
  );
}

export default About;
