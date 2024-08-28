import { FaCode } from "react-icons/fa";
import "./Project.css";
import ProjectCard from "../../molecules/projectcard/ProjectCard";
import { useTranslation } from "react-i18next";
import { Project } from "../../../types";

function Projects() {
  const { t } = useTranslation();
  const projects: Project[] = t("projects", {
    returnObjects: true,
  }) as Project[];
  return (
    <section className="projects" id="projects">
      <div className="title-container">
        <span className="section-icon">
          <FaCode />
        </span>
        <h1 className="section-title">{t("projectssection")}</h1>
      </div>
      <div className="card-grid">
        {projects.map(
          (project) =>
            project.active && (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                techIcons={project.technologies}
                links={project.links}
              />
            )
        )}
      </div>
    </section>
  );
}

export default Projects;
