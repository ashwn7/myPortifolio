import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Greetings! I'm Ashwin Balaji Dhandapani, a graduate student{" "}
          <span className="about__specialText">Northeastern University, Boston</span>{" "}
          With 3.5 years of experience as a Software Engineer, I've honed my skills in Java Development, PLM, Software Quality, and DevSecOps{" "}
          I'm passionate about becoming a <span className="about__specialText">Full stack developer</span>,
          developing Front-end, creating APIs, and working with databases. Additionally, I have a keen interest 
          in Cybersecurity, particularly in the areas of <span className="about__specialText">DevSecOps
          </span> <span className="about__specialText">Security Automations</span> and <span className="about__specialText">Penetration Testing.</span>
          My goal is to continue expanding my knowledge and expertise in these fields to become a well-rounded software developer.
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="./images/AshwinBalajiDhandapani.jpeg"
        alt="Brand Logo"
        width="300"
        height="425"
      />
      <LightWave />
    </section>
  );
}

export default About;
