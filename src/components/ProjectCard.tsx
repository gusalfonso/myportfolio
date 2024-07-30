// import "../css/ProjectCard.css";
// import { ProjectCardProps } from "../types";
// import SocialLink from "./LinkHover"; // Asegúrate de importar SocialLink

// function ProjectCard({
//   title,
//   description,
//   image,
//   techIcons,
// }: ProjectCardProps) {
//   return (
//     <div className={`project-card ${title}`}>
//       <div className="card-content">
//         <div className="text-content">
//           <span className="project-title">{title}</span>
//           <p className="project-description">{description}</p>
//           <div className="icons">
//             {techIcons.map((icon, index) => (
//               <SocialLink key={index} title={icon.title} svg={icon.svg} />
//             ))}
//           </div>
//         </div>
//         <img className="project-image" src={image} alt={`Photo ${title}`} />
//         <div className="image-gradient"></div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

import "../css/ProjectCard.css";
import { ProjectCardProps } from "../types";
import getIconForTech from "../utils/iconstree"; // Asegúrate de ajustar la ruta
import SocialLink from "./LinkHover";

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
            {techIcons.map((tech, index) => {
              const IconComponent = getIconForTech(tech);
              return IconComponent ? (
                <span key={index} className="tech-icon">
                  <SocialLink
                    key={index}
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
      </div>
    </div>
  );
}

export default ProjectCard;
