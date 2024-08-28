// import { BsPersonCheck } from "react-icons/bs";
// import "../css/About.css";
// import { DATA } from "../cv/cv";
// import LanguageSelector from "./atoms/LanguageSelector";
// import { useTranslation } from "react-i18next";

// function About() {
//   const { t } = useTranslation();
//   return (
//     <section className="aboutme" id="aboutme">
//       <LanguageSelector />
//       <div className="title-container">
//         <span className="section-icon">{<BsPersonCheck />}</span>
//         <h1 className="section-title">{t(navbar[1].label)}</h1>
//       </div>
//       <div className="summary">
//         {DATA.summary
//           .split(".  ")
//           .map(
//             (sentence, index) =>
//               sentence.trim() !== "" && <p key={index}>{sentence.trim()}.</p>
//           )}
//       </div>
//     </section>
//   );
// }

// export default About;

import { BsPersonCheck } from "react-icons/bs";
import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="aboutme" id="aboutme">
      <div className="title-container">
        <span className="section-icon">{<BsPersonCheck />}</span>
        <h1 className="section-title">{t("aboutsection")}</h1>{" "}
      </div>
      <div className="summary">
        {t("summary")
          .split(".  ")
          .map(
            (sentence, index) =>
              sentence.trim() !== "" && <p key={index}>{sentence.trim()}.</p>
          )}
      </div>
    </section>
  );
}

export default About;
