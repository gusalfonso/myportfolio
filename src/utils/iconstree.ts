import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiAstro, SiNextdotjs, SiStrapi } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

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
  if (tech === "Astro") {
    return SiAstro;
  }
  if (tech === "Typescript") {
    return BiLogoTypescript;
  }
  if (tech === "NextJS") {
    return SiNextdotjs;
  }
  if (tech === "Strapi") {
    return SiStrapi;
  }
  return null;
}

export default getIconForTech;
