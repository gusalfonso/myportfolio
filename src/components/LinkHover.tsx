import "../css/LinkHover.css";
import { TechIcon } from "../types";

function SocialLink({ title, svg }: TechIcon) {
  return (
    <div className="icon-container">
      <a
        title={title}
        target="_blank"
        className="social-link"
        rel="noopener noreferrer"
      >
        {svg}
      </a>
    </div>
  );
}

export default SocialLink;
