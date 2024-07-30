import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { IconType } from "react-icons";

function getIconForTech(tech: string): IconType | null {
  if (tech === "HTML") {
    return FaHtml5;
  }
  if (tech === "CSS") {
    return FaCss3Alt;
  }
  if (tech === "JavaScript") {
    return FaJsSquare;
  }
  if (tech === "React") {
    return FaReact;
  }
  return null;
}

export default getIconForTech;
