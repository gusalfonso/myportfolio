import "../css/ProjectCard.css";
import { ProjectCardProps } from "../types";
import SocialLink from "./LinkHover"; // Asegúrate de importar SocialLink

function ProjectCard({
  title,
  description,
  image,
  techIcons,
}: ProjectCardProps) {
  return (
    <div className={`project-card ${title}`}>
      <div className="card-content">
        <div className="text-content">
          <span className="project-title">{title}</span>
          <p className="project-description">{description}</p>
          <div className="icons">
            {techIcons.map((icon, index) => (
              <SocialLink
                key={index}
                title={icon.title}
                href={icon.href}
                svg={icon.svg}
              />
            ))}
          </div>
        </div>
        <img className="project-image" src={image} alt={`Photo ${title}`} />
        <div className="image-gradient"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
