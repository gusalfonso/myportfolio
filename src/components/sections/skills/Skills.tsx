import { FaTools } from "react-icons/fa";
import "./Skills.css";
import Carrousel from "../../molecules/carrousel/Carrousel";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <section className="skills" id="skills">
      <div className="title-container">
        <span className="section-icon">{<FaTools />}</span>
        <h1 className="section-title">{t("skillssection")}</h1>
      </div>
      <Carrousel />
    </section>
  );
}

export default Skills;
