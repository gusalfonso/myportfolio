import "./NavBar.css";
import { Dock, DockIcon } from "../../atoms/dock/Dock";
import { DATA } from "../../../cv/cv";
import LanguageSelector from "../../atoms/languageselector/LanguageSelector";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="navbar-container">
      <div className="navbar-bg"></div>
      <Dock className="dock">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <a
              data-tooltip-id={`${t(`${item.section}`)}-tooltip`}
              data-tooltip-content={`${t(`${item.section}`)}`}
              data-tooltip-place="bottom"
              href={item.href}
            >
              <item.icon />
            </a>
            <Tooltip
              id={`${t(`${item.section}`)}-tooltip`}
              className="tooltip"
            />
          </DockIcon>
        ))}
        <span>|</span>
        {Object.entries(DATA.contact.social)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <a href={social.url} target="_blank">
                <social.icon />
              </a>
            </DockIcon>
          ))}
      </Dock>
      <LanguageSelector />
    </div>
  );
}
