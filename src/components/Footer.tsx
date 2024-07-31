import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; {currentYear} Todos los derechos reservados.</p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.linkedin.com/in/gustavoaalfonso/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/gusalfonso"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:alfonsgustavo@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
