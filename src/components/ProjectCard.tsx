// import "../css/ProjectCard.css";
// import { ProjectCardProps } from "../types";

// function ProjectCard({ title, description, image }: ProjectCardProps) {
//   return (
//     <>
//       <div className="project-card">
//         <div className="card-content">
//           <div className="text-content">
//             <div className="text-details">
//               <span className="project-title">{title}</span>
//               <p className="project-description">{description}</p>
//               <div className="icons">
//                 <div className="icon">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.4"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
//                     <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
//                     <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
//                     <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
//                     <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
//                     <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
//                     <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
//                   </svg>
//                 </div>
//                 <div className="icon">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.4"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             className="project-image"
//             src={`../../img/projects/${image}.jpg `}
//             alt="Photo Tensei"
//           />
//           <div className="image-gradient"></div>
//           <svg
//             className="edit-icon"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
//             <path d="M11 13l9 -9"></path>
//             <path d="M15 4h5v5"></path>
//           </svg>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProjectCard;

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
    <div className="project-card">
      <div className="card-content">
        <div className="text-content">
          <div className="text-details">
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
        </div>
        <img className="project-image" src={image} alt={`Photo ${title}`} />
        <div className="image-gradient"></div>
        <svg
          className="edit-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
          <path d="M11 13l9 -9"></path>
          <path d="M15 4h5v5"></path>
        </svg>
      </div>
    </div>
  );
}

export default ProjectCard;
