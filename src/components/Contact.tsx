import { TiContacts } from "react-icons/ti";
import "../css/Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactMe() {
  return (
    <section>
      <div className="title-container">
        <span className="section-icon">{<TiContacts />}</span>
        <h1 className="section-title">Let's talk!</h1>
      </div>
      <div className="contact-container">
        <p className="contact-p">
          I'd love to hear from you! Whether you have questions or just want to
          chat, drop me a message anytime.
        </p>
        <a className="contact-a" href="mailto:alfonsgustavo@gmail.com">
          <button className="contactbtn">
            <MdOutlineMailOutline size={25} />
            Contact Me
          </button>
        </a>
      </div>
    </section>
  );
}

export default ContactMe;
