import { TiContacts } from "react-icons/ti";
import "../css/Contact.css";

function ContactMe() {
  return (
    <section>
      <div className="title-container">
        <span className="section-icon">{<TiContacts />}</span>
        <h1 className="section-title">Let's talk!</h1>
      </div>
    </section>
  );
}

export default ContactMe;
