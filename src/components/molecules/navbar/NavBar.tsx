import "./NavBar.css";
import { Dock, DockIcon } from "../../atoms/dock/Dock";
import { DATA } from "../../../cv/cv";
import LanguageSelector from "../../atoms/languageselector/LanguageSelector";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-bg"></div>
      <Dock className="dock">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <a href={item.href}>
              <item.icon />
            </a>
          </DockIcon>
        ))}
        <span>|</span>
        {Object.entries(DATA.contact.social)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <a href={social.url}>
                <social.icon />
              </a>
            </DockIcon>
          ))}
      </Dock>
      <LanguageSelector />
    </div>
  );
}
