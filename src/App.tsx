import "./App.css";
import SocialLink from "./components/LinkHover";
import ProjectCard from "./components/ProjectCard";
import { FaReact, FaInstagram } from "react-icons/fa";
import Carrousel from "./components/Carrousel";
// import Board from "./components/Board";
const techIcons = [
  {
    title: "React",
    href: "https://reactjs.org/",
    svg: <FaInstagram key="react" size={25} fill="black" />,
  },
  {
    title: "React",
    href: "https://reactjs.org/",
    svg: <FaReact key="react" size={25} fill="black" />,
  },
  {
    title: "React",
    href: "https://reactjs.org/",
    svg: <FaReact key="react" />,
  },
];

function App() {
  return (
    <>
      {/* <section className="home" id="home">
        <div className="app-container">
          <Board />
        </div>
      </section> */}
      <section className="projects" id="projects">
        <div className="card-grid">
          <ProjectCard
            title="Tensei"
            description="A website for virtual reality and technology
                company."
            image="1"
            techIcons={techIcons}
          />
          <ProjectCard
            title="Tensei"
            description="A website for virtual reality and technology
                company."
            image="1"
            techIcons={techIcons}
          />
          <ProjectCard
            title="Tensei"
            description="A website for virtual reality and technology
                company."
            image="1"
            techIcons={techIcons}
          />
        </div>
        <div className="social-container">
          <SocialLink
            title="twiter"
            href=""
            svg={<FaReact size={30} fill="black" />}
          />
        </div>
      </section>
      <section className="skills" id="skills">
        <Carrousel />
        <Carrousel />
      </section>
    </>
  );
}

export default App;
