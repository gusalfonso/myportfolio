import { FaInstagram, FaReact } from "react-icons/fa";
import "../css/Project.css";
import ProjectCard from "./ProjectCard";
import { DATA } from "../cv/cv";

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

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="card-grid">
        {DATA.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            techIcons={techIcons}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
