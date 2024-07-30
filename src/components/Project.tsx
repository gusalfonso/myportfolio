import { FaCode } from "react-icons/fa";
import "../css/Project.css";
import ProjectCard from "./ProjectCard";
import { DATA } from "../cv/cv";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="title-container">
        <span className="section-icon">
          <FaCode />
        </span>
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="card-grid">
        {DATA.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            techIcons={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
