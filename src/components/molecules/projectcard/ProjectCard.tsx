import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";
import { ProjectCardProps } from "../../../types";
import getIconForTech from "../../../utils/iconstree";
import SocialLink from "../../atoms/linkhover/LinkHover";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({
  title,
  description,
  image,
  techIcons,
  links,
}: ProjectCardProps) {
  return (
    <div className={`project-card ${title}`}>
      <div className="card-content">
        <div className="text-content">
          <span className="project-title">{title}</span>
          <p className="project-description">{description}</p>
          <div className="icons">
            {techIcons.map((tech, index) => {
              const IconComponent = getIconForTech(tech);
              return IconComponent ? (
                <span key={index} className="tech-icon">
                  <SocialLink
                    key={index}
                    href=""
                    title={tech}
                    svg={<IconComponent />}
                  />
                </span>
              ) : null;
            })}
          </div>
        </div>
        <img className="project-image" src={image} alt={`Photo ${title}`} />
        <div className="image-gradient"></div>
        <div className="preview-icons">
          <a href={links[0].href} target="_blank">
            <FaArrowUpRightFromSquare size={25} className="shadow" />
          </a>
          <a href={links[1].href} target="_blank">
            <FaGithub size={25} className="shadow" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
