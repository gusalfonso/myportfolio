import { MdOutlineMailOutline } from "react-icons/md";
import "./Hero.css";
import LinkHover from "../../../components/atoms/linkhover/LinkHover";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="me-container">
          <div className="me">
            <h1 className="title">{t("hello")}</h1>
            <p className="description">{t("description")}</p>
            <div className="hero-icons">
              <LinkHover
                title="Linkedin"
                href="https://www.linkedin.com/in/gustavoaalfonso/"
                svg={<FaLinkedin />}
              />
              <LinkHover
                title="Github"
                href="https://github.com/gusalfonso"
                svg={<FaGithub />}
              />
              <LinkHover
                title="Contact"
                href="mailto:alfonsgustavo@gmail.com"
                svg={<MdOutlineMailOutline />}
              />
            </div>
          </div>
          <div className="img-container">
            <img src={t("avatarUrl")} alt={t("name")} />
          </div>
        </div>
      </div>
    </section>
  );
}
