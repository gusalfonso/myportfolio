import Card from "../../atoms/skillcard/SkillCard";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import "./Carrousel.css";
import { SiAstro, SiNextdotjs, SiStrapi, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function Carrousel() {
  return (
    <ul className="grid-container" id="skill-container">
      <li className="skill-container" id="skill-container">
        <div className="carrousel" id="carrousel">
          <Card skill="React" svg={<FaReact size={45} />} />
          <Card skill="HTML5" svg={<FaHtml5 size={45} />} />
          <Card skill="CSS3" svg={<FaCss3 size={45} />} />
          <Card skill="JavaScript" svg={<FaJs size={45} />} />
          <Card skill="Python" svg={<FaPython size={45} />} />
          <Card skill="Tailwind" svg={<SiTailwindcss size={45} />} />
          <Card skill="Astro" svg={<SiAstro size={45} />} />
          <Card skill="Git" svg={<FaGitAlt size={45} />} />
          <Card skill="MySQL" svg={<GrMysql size={45} />} />
          <Card skill="Node.js" svg={<FaNodeJs size={45} />} />
          <Card skill="Next.js" svg={<SiNextdotjs size={45} />} />
          <Card skill="Strapi" svg={<SiStrapi size={45} />} />
          <Card skill="React" svg={<FaReact size={45} />} />
          <Card skill="HTML5" svg={<FaHtml5 size={45} />} />
          <Card skill="CSS3" svg={<FaCss3 size={45} />} />
          <Card skill="JavaScript" svg={<FaJs size={45} />} />
          <Card skill="Python" svg={<FaPython size={45} />} />
          <Card skill="Tailwind" svg={<SiTailwindcss size={45} />} />
          <Card skill="Astro" svg={<SiAstro size={45} />} />
          <Card skill="Git" svg={<FaGitAlt size={45} />} />
          <Card skill="MySQL" svg={<GrMysql size={45} />} />
          <Card skill="Node.js" svg={<FaNodeJs size={45} />} />
          <Card skill="Next.js" svg={<SiNextdotjs size={45} />} />
          <Card skill="Strapi" svg={<SiStrapi size={45} />} />
        </div>
      </li>
    </ul>
  );
}

export default Carrousel;
