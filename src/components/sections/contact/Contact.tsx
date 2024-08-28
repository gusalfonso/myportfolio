import { TiContacts } from "react-icons/ti";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";

function ContactMe() {
  const { t } = useTranslation();
  return (
    <section className="contact" id="contact">
      <div className="title-container">
        <span className="section-icon">{<TiContacts />}</span>
        <h1 className="section-title">{t("contactsection")}</h1>
      </div>
      <div className="contact-container">
        <p className="contact-p">{t("contactp")}</p>
        <a className="contact-a" href="mailto:alfonsgustavo@gmail.com">
          <button className="contactbtn">
            <MdOutlineMailOutline size={25} />
            {t("contactbtn")}
          </button>
        </a>
      </div>
    </section>
  );
}

export default ContactMe;
