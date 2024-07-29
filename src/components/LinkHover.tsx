import "../css/LinkHover.css";
import { TechIcon } from "../types";

function SocialLink({ title, href, svg }: TechIcon) {
  return (
    <a
      title={title}
      href={href}
      target="_blank"
      className="social-link"
      rel="noopener noreferrer"
    >
      <div className="icon-container">{svg}</div>
    </a>
  );
}

export default SocialLink;
