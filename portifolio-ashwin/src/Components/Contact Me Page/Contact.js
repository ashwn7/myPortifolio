import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__p">
          Currently, Seeking Full time Software Development Roles
        </p>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: dhandapani@northeastern.edu">
            <span className="contact__text">dhandapani.as@northeastern.edu</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/ashwin-balaji-dhandapani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">Ashwin Balaji Dhandapani</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
