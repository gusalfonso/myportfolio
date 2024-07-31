import { MdOutlineMailOutline } from "react-icons/md";
import "../css/Hero.css";
import { DATA } from "../cv/cv";
import LinkHover from "./LinkHover";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="me-container">
          <div className="me">
            <h1 className="title">{`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}</h1>
            <p className="description">{DATA.description}</p>
            <div className="hero-icons">
              <LinkHover
                title="Linkedin"
                href="https://www.linkedin.com/in/gustavoaalfonso/"
                svg={<FaLinkedin />}
              />
              <LinkHover
                title="Github"
                href="https://github.com/gusalfonso"
                svg={<FaGithub />}
              />
              <LinkHover
                title="Contact"
                href="mailto:alfonsgustavo@gmail.com"
                svg={<MdOutlineMailOutline />}
              />
            </div>
          </div>
          <div className="img-container">
            <img src={DATA.avatarUrl} alt={DATA.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
