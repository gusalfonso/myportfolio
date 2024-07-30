import Card from "./SkillCard";
import { FaCss3, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import "../css/Carrousel.css";
import { SiAstro, SiTailwindcss } from "react-icons/si";

function Carrousel() {
  return (
    <ul className="grid-container" id="skill-container">
      <li className="skill-container" id="skill-container">
        <div className="carrousel" id="carrousel">
          <Card skill="React" svg={<FaReact size={45} />} />
          <Card skill="HTML" svg={<FaHtml5 size={45} />} />
          <Card skill="CSS" svg={<FaCss3 size={45} />} />
          <Card skill="JavaScript" svg={<FaJs size={45} />} />
          <Card skill="Python" svg={<FaPython size={45} />} />
          <Card skill="Tailwind" svg={<SiTailwindcss size={45} />} />
          <Card skill="Astro" svg={<SiAstro size={45} />} />
        </div>
      </li>
    </ul>
  );
}

export default Carrousel;
